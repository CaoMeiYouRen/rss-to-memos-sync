import { Hono } from 'hono'
import { HTTPException } from 'hono/http-exception'
import { env, getRuntimeKey } from 'hono/adapter'
import { Item } from 'rss-parser'
import * as cheerio from 'cheerio'
import { Article, Bindings } from '../types'
import { filterArticles, rssParserURL } from '@/utils/rss-helper'
import { Api, V1Visibility } from '@/apis/memos'
import logger from '@/middlewares/logger'
import { htmlToMarkdown } from '@/utils/helper'

const app = new Hono<{ Bindings: Bindings }>()

type SyncFromUrlBody = {
    // RSS URL
    url: string
}

// app.post('/syncFromUrl', async (c) => {
//     const { MEMOS_API_URL, MEMOS_ACCESS_TOKEN } = env(c)
//     const { url } = await c.req.json<SyncBody>()
//     if (!url) {
//         throw new HTTPException(400, {
//             message: 'URL is required',
//         })
//     }
//     // const feed = await rssParserURL(url)

// })

type SyncFromArticlesBody = Article[]

app.post('/syncFromArticles', async (c) => {
    if (getRuntimeKey() !== 'workerd') {
        return c.json({ error: 'This function is only available in Cloudflare Workers' }, 500)
    }
    const { MEMOS_API_URL, MEMOS_ACCESS_TOKEN, R2_UPLOADER_URL, D1 } = env(c)
    if (!MEMOS_API_URL || !MEMOS_ACCESS_TOKEN) {
        throw new HTTPException(500, {
            message: 'MEMOS_API_URL or MEMOS_ACCESS_TOKEN is not set',
        })
    }
    const articles = await c.req.json<SyncFromArticlesBody>()
    if (!articles?.length) {
        throw new HTTPException(400, {
            message: 'articles is required',
        })
    }
    const filteredArticles = filterArticles(articles, {
        filter: {
            limit: 5,
            time: 3600, // 1 小时
        },
        filterout: {
            title: '关注了|赞了|抽奖|分享了|广告|转发动态',
        },
    })
    if (!filteredArticles?.length) {
        return c.json({
            message: 'No articles to sync',
        }, 200)
    }
    const memosApi = new Api({
        baseUrl: MEMOS_API_URL,
        baseApiParams: {
            headers: {
                Authorization: `Bearer ${MEMOS_ACCESS_TOKEN}`,
            },
        },
    })
    const createMemo = memosApi.api.memoServiceCreateMemo
    // 统计成功/失败/跳过的数量
    let successCount = 0
    let failCount = 0
    let skipCount = 0
    for await (const article of filteredArticles) {
        try {
            // 检查 filteredArticles 是否已同步过
            // TODO 考虑基于 content 去重
            const res = await D1.prepare('SELECT * FROM article WHERE link =?').bind(article.link).first()
            if (res) {
                // 已同步过
                skipCount++
                continue
            }

            // 未同步过
            const link = article.link
            let content = article.content
            const tags = article.categories
            // 检查 content 中是否包含 tags，如果没有，追加到 content 开头
            // 主流的 tag 有两种格式
            // 1. 以 # 开头，以空格结尾，例如 #tag1 #tag2 #tag3
            // 2. 以 # 开头，以 # 结尾，例如 #tag1# #tag2# #tag3#
            for (const tag of tags) {
                // 检查 tag 是否已存在
                if (content.includes(`#${tag} `) || content.includes(`#${tag}#`)) {
                    continue
                }
                // 不存在，追加到 content 开头
                content = `#${tag} ${content}`
            }
            // 在 content 末尾追加 原文链接
            content = `${content}\n原文链接：<a href="${link}">${link}</a>`
            // 如果存在图片，则转存图片到 R2
            const $ = cheerio.load(content)
            const images = $('img')
            if (images?.length) {
                await Promise.all(images.toArray().map(async (el) => {
                    const src = $(el).attr('src')
                    if (src) {
                        // 转存图片到 R2
                        logger.log('正在转存图片', src)
                        const uploaderUrl = new URL(R2_UPLOADER_URL)
                        uploaderUrl.pathname = '/upload-from-url'
                        try {
                            const { success, url } = await (await fetch(uploaderUrl, {
                                method: 'POST',
                                body: JSON.stringify({ url: src }),
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            })).json()
                            if (success) {
                                logger.log('转存图片成功', url)
                                $(el).attr('src', url)
                            }
                        } catch (error) {
                            logger.error(error)
                        }
                    }
                }))
            }
            content = $('body').html()

            content = htmlToMarkdown(content)
            logger.log('内容', content)
            // 同步到 memos
            await createMemo({
                content,
                visibility: V1Visibility.PUBLIC,
            })
            await D1.prepare('INSERT INTO article (link, content) VALUES (?,?)').bind(article.link, content).run()
            successCount++
        } catch (error) {
            logger.error(error)
            failCount++
        }
    }
    return c.json({
        message: 'Sync success',
        data: {
            successCount,  // 成功数量
            failCount, // 失败数量
            skipCount, // 跳过数量
        },
    }, 200)

})

export default app
