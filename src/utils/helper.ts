import * as betterBytes from 'better-bytes'
import Turndown from 'turndown'
import { createDocument } from '@mixmark-io/domino'
/**
 * 解析流量数据。如果为 number，则返回本身；如果为 string，则返回 betterBytes.parse 后的结果
 *
 * @author CaoMeiYouRen
 * @date 2024-05-26
 * @export
 * @param data
 */
export function parseDataSize(data: number | string): number {
    if (typeof data === 'number') {
        return data
    }
    return Number(betterBytes.parse(data))
}

/**
 *  将 HTML 转换为 Markdown
 * @param html
 * @returns
 */
export function htmlToMarkdown(html: string): string {
    const document = createDocument(html)
    const turndownService = new Turndown({
        headingStyle: 'atx',
        bulletListMarker: '-',
        hr: '---',
    })
    const markdown = turndownService.turndown(document)
    return markdown
}
