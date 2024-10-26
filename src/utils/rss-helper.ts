import dayjs from 'dayjs'
import Parser from 'rss-parser'
import { parseDataSize } from './helper'
import { Article, Condition } from '@/types'

export const rssParser = new Parser()

/**
 * 解析 RSS 地址
 *
 * @author CaoMeiYouRen
 * @date 2024-10-26
 * @export
 * @param url
 */
export async function rssParserURL(url: string) {
    const feed = await rssParser.parseURL(url)
    return feed
}

/**
 *  解析 RSS 字符串
 *
 * @author CaoMeiYouRen
 * @date 2024-10-26
 * @export
 * @param xml
 */
export async function rssParserString(xml: string) {
    const feed = await rssParser.parseString(xml)
    return feed
}

const filterFields = ['link', 'title', 'content', 'summary', 'author', 'categories', 'enclosureUrl', 'enclosureType', 'enclosureLength']

const XRegExp = RegExp

/**
 * 按条件过滤文章
 *
 * @author CaoMeiYouRen
 * @date 2024-04-21
 * @export
 * @param articles 文章数组
 * @param condition 条件
 */
export function filterArticles(articles: Article[], condition: Condition): Article[] {
    const { filterout, filter } = condition
    return articles
        .filter((article) => {
            if (!article.pubDate || !condition.filter.time) { // 没有 pubDate/filter.time 不受过滤时间限制
                return true
            }
            return dayjs().diff(article.pubDate, 'second') <= condition.filter.time
        })
        // 先判断 filterout
        .filter((article) => filterFields.every((field) => { // 所有条件为 并集，即 有一个 不符合 就排除
            if (!filterout[field] || !article[field]) { // 如果缺少 filterout 或 article 对应的项就跳过该过滤条件
                return true
            }
            if (field === 'categories') {
                // 有一个 category 对的上就 排除
                return !article[field].some((category) => XRegExp(filterout[field], 'ig').test(category))
            }
            return !XRegExp(filterout[field], 'ig').test(article[field])
        }))
        // 再判断 filter
        .filter((article) => filterFields.every((field) => { // 所有条件为 交集，即 需要全部条件 符合
            if (!filter[field] || !article[field]) { // 如果缺少 filter 或 article 对应的项就跳过该过滤条件
                return true
            }
            if (field === 'enclosureLength') {
                // 保留体积，只下载体积小于 enclosureLength 的资源
                return parseDataSize(filter.enclosureLength) > article.enclosureLength
            }
            if (field === 'categories') {
                // 有一个 category 对的上就为 true
                return article[field].some((category) => XRegExp(filter[field], 'ig').test(category))
            }
            return XRegExp(filter[field], 'ig').test(article[field])
        }))
        .slice(0, filter.limit || 20) // 默认最多 20 条
}
