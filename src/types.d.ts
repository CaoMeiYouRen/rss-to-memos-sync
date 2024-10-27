import type { D1Database, R2Bucket } from '@cloudflare/workers-types'

export type Bindings = {
    NODE_ENV: string
    PORT: string
    LOGFILES: string
    LOG_LEVEL: string
    TIMEOUT: string
    MAX_BODY_SIZE: string
    MEMOS_API_URL: string
    MEMOS_ACCESS_TOKEN: string
    R2_UPLOADER_URL: string
    R2: R2Bucket
    D1: D1Database
}

export interface Filter {
    /**
     * 条数限制
     * 限制最大条数，主要用于排行榜类 RSS。默认值 20。
     * @example 20
     */
    limit?: number
    /**
     * 过滤时间(秒)
     * 过滤时间，返回指定时间范围内的内容。设置为 0 禁用
     * @example 3600
     */
    time?: number
    /**
     * 过滤链接
     * @minLength 0
     * @maxLength 2048
     * @example "url1|url2"
     */
    link?: string
    /**
     * 过滤标题
     * @minLength 0
     * @maxLength 256
     * @example "标题1|标题2"
     */
    title?: string
    /**
     * 过滤正文
     * @minLength 0
     * @maxLength 2048
     * @example "正文1|正文2"
     */
    content?: string
    /**
     * 过滤总结
     * @minLength 0
     * @maxLength 1024
     * @example "总结1|总结2"
     */
    summary?: string
    /**
     * 过滤作者
     * @minLength 0
     * @maxLength 256
     * @example "author1|author2"
     */
    author?: string
    /**
     * 过滤分类
     * 分类正则中有一个对得上就保留
     * @minLength 0
     * @maxLength 256
     * @example "tag1|tag2"
     */
    categories?: string
    /**
     * 过滤附件URL
     * @minLength 0
     * @maxLength 2048
     * @example "url1|url2"
     */
    enclosureUrl?: string
    /**
     * 过滤附件类型
     * @minLength 0
     * @maxLength 256
     * @example "type1|type2"
     */
    enclosureType?: string
    /**
     * 过滤附件体积(B)
     * 单位为 B(字节)。支持带单位，例如：1 GiB。设置为空禁用
     * @example "1 GiB"
     */
    enclosureLength?: string
}

export interface FilterOut {
    /**
     * 排除链接
     * @minLength 0
     * @maxLength 2048
     * @example "url1|url2"
     */
    link?: string
    /**
     * 排除标题
     * @minLength 0
     * @maxLength 256
     * @example "标题1|标题2"
     */
    title?: string
    /**
     * 排除正文
     * @minLength 0
     * @maxLength 2048
     * @example "正文1|正文2"
     */
    content?: string
    /**
     * 排除总结
     * @minLength 0
     * @maxLength 1024
     * @example "总结1|总结2"
     */
    summary?: string
    /**
     * 排除作者
     * @minLength 0
     * @maxLength 256
     * @example "author1|author2"
     */
    author?: string
    /**
     * 排除分类
     * 分类正则中有一个对得上就排除
     * @minLength 0
     * @maxLength 256
     * @example "tag1|tag2"
     */
    categories?: string
    /**
     * 排除附件URL
     * @minLength 0
     * @maxLength 2048
     * @example "url1|url2"
     */
    enclosureUrl?: string
    /**
     * 排除附件类型
     * @minLength 0
     * @maxLength 256
     * @example "type1|type2"
     */
    enclosureType?: string
}

export type Condition = {
    filter: Filter
    filterout: FilterOut
}

export interface Article {
    /**
     * ID
     * @example 1
     */
    id: number
    /**
     * 创建时间
     * @format date-time
     * @example "2023-12-31T16:00:00.000Z"
     */
    createdAt: Date
    /**
     * 更新时间
     * @format date-time
     * @example "2023-12-31T16:00:00.000Z"
     */
    updatedAt: Date
    /**
     * 所属用户
     * @example 1
     */
    userId: number
    /** 所属用户 */
    user: any
    /**
     * 全局索引
     * @example "499d4cee"
     */
    guid: string
    /**
     * 链接
     * @example "https://blog.cmyr.ltd/archives/499d4cee.html"
     */
    link?: string
    /**
     * 标题
     * @example "这是一个标题"
     */
    title?: string
    /**
     * 正文
     * @example "这是一段正文"
     */
    content?: string
    /**
     * 发布日期
     * @format date-time
     * @example "2023-12-31T16:00:00.000Z"
     */
    pubDate?: Date
    /**
     * 作者
     * @example "CaoMeiYouRen"
     */
    author?: string
    /**
     * 摘要
     * 纯文本格式，无 HTML
     * @example "这是一段内容摘要"
     */
    contentSnippet?: string
    /**
     * 总结
     * @example "这是一段总结"
     */
    summary?: string
    /**
     * AI 总结
     * @example "这是一段 AI 总结"
     */
    aiSummary?: string
    /**
     * 分类列表
     * RSS 源定义的分类，和 本地RSS 的分类不是同一个
     * @example ["tag1","tag2"]
     */
    categories?: string[]
    /**
     * 附件URL
     * @example "http://bt.example.com"
     */
    enclosureUrl?: string
    /**
     * 附件类型
     * @example "application/x-bittorrent"
     */
    enclosureType?: string
    /**
     * 附件体积(B)
     * 单位为 B(字节)
     * @example 114514
     */
    enclosureLength?: number
    /**
     * 附件体积
     * 单位为 B(字节)
     * @example "114.51 MiB"
     */
    enclosureLengthFormat?: string
    /**
     * 订阅源
     * @example 1
     */
    feedId: number
    /** 订阅源 */
    feed: any
}
