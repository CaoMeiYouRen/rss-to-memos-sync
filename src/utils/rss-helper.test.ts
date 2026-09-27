import { describe, it, expect } from 'vitest'
import { filterArticles } from './rss-helper'

describe('rss-helper', () => {
    const baseArticle = {
        id: 1,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
        userId: 1,
        user: {},
        guid: 'test-guid',
        link: 'https://example.com/article',
        title: 'Test Article',
        content: 'Test content',
        pubDate: new Date('2024-01-15'),
        author: 'Test Author',
        contentSnippet: 'Test snippet',
        summary: 'Test summary',
        aiSummary: 'AI summary',
        categories: ['tag1', 'tag2'],
        enclosureUrl: '',
        enclosureType: '',
        enclosureLength: 0,
        enclosureLengthFormat: '0 B',
        feedId: 1,
        feed: {},
    }

    describe('filterArticles', () => {
        it('should return all articles when no filter conditions', () => {
            const articles = [baseArticle, { ...baseArticle, id: 2, guid: 'guid-2' }]
            const result = filterArticles(articles, { filter: {}, filterout: {} })
            expect(result).toHaveLength(2)
        })

        it('should filter by time', () => {
            const oldArticle = { ...baseArticle, id: 2, guid: 'guid-2', pubDate: new Date('2020-01-01') }
            const recentArticle = { ...baseArticle, id: 3, guid: 'guid-3', pubDate: new Date() }
            const articles = [oldArticle, recentArticle]
            const result = filterArticles(articles, {
                filter: { time: 3600 * 24 * 7 }, // 7 days
                filterout: {},
            })
            expect(result).toHaveLength(1)
            expect(result[0].id).toBe(3)
        })

        it('should not filter articles without pubDate when time filter is set', () => {
            const noDateArticle = { ...baseArticle, id: 2, guid: 'guid-2', pubDate: undefined }
            const articles = [noDateArticle]
            const result = filterArticles(articles, {
                filter: { time: 3600 * 24 }, // 1 day
                filterout: {},
            })
            expect(result).toHaveLength(1)
        })

        it('should filter out by title regex', () => {
            const articles = [
                baseArticle,
                { ...baseArticle, id: 2, guid: 'guid-2', title: '关注了某人' },
                { ...baseArticle, id: 3, guid: 'guid-3', title: '普通文章' },
            ]
            const result = filterArticles(articles, {
                filter: {},
                filterout: { title: '关注了|赞了' },
            })
            expect(result).toHaveLength(2)
            expect(result.find((a) => a.title === '关注了某人')).toBeUndefined()
        })

        it('should filter out by content regex', () => {
            const articles = [
                baseArticle,
                { ...baseArticle, id: 2, guid: 'guid-2', content: '这是广告内容' },
                { ...baseArticle, id: 3, guid: 'guid-3', content: '普通内容' },
            ]
            const result = filterArticles(articles, {
                filter: {},
                filterout: { content: '广告|推广' },
            })
            expect(result).toHaveLength(2)
            expect(result.find((a) => a.content === '这是广告内容')).toBeUndefined()
        })

        it('should filter out by author regex', () => {
            const articles = [
                baseArticle,
                { ...baseArticle, id: 2, guid: 'guid-2', author: 'SpamBot' },
                { ...baseArticle, id: 3, guid: 'guid-3', author: 'NormalUser' },
            ]
            const result = filterArticles(articles, {
                filter: {},
                filterout: { author: 'SpamBot|Bot' },
            })
            expect(result).toHaveLength(2)
            expect(result.find((a) => a.author === 'SpamBot')).toBeUndefined()
        })

        it('should filter out by categories regex', () => {
            const articles = [
                baseArticle,
                { ...baseArticle, id: 2, guid: 'guid-2', categories: ['抽奖', 'tag1'] },
                { ...baseArticle, id: 3, guid: 'guid-3', categories: ['tag2', 'tag3'] },
            ]
            const result = filterArticles(articles, {
                filter: {},
                filterout: { categories: '抽奖|中奖' },
            })
            expect(result).toHaveLength(2)
            expect(result.find((a) => a.categories?.includes('抽奖'))).toBeUndefined()
        })

        it('should filter by title regex (include)', () => {
            const articles = [
                { ...baseArticle, id: 2, guid: 'guid-2', title: '重要通知' },
                { ...baseArticle, id: 3, guid: 'guid-3', title: '普通文章' },
            ]
            const result = filterArticles(articles, {
                filter: { title: '重要|通知' },
                filterout: {},
            })
            expect(result).toHaveLength(1)
            expect(result[0].title).toBe('重要通知')
        })

        it('should filter by categories regex (include)', () => {
            const articles = [
                { ...baseArticle, id: 2, guid: 'guid-2', categories: ['tech', 'news'] },
                { ...baseArticle, id: 3, guid: 'guid-3', categories: ['life', 'food'] },
            ]
            const result = filterArticles(articles, {
                filter: { categories: 'tech|news' },
                filterout: {},
            })
            expect(result).toHaveLength(1)
            expect(result[0].categories).toContain('tech')
        })

        it('should filter by enclosureLength', () => {
            const articles = [
                { ...baseArticle, id: 2, guid: 'guid-2', enclosureLength: 1024 * 1024 }, // 1 MiB
                { ...baseArticle, id: 3, guid: 'guid-3', enclosureLength: 10 * 1024 * 1024 }, // 10 MiB
            ]
            const result = filterArticles(articles, {
                filter: { enclosureLength: '5 MiB' },
                filterout: {},
            })
            expect(result).toHaveLength(1)
            expect(result[0].enclosureLength).toBe(1024 * 1024)
        })

        it('should respect limit', () => {
            const articles = Array.from({ length: 10 }, (_, i) => ({
                ...baseArticle,
                id: i + 1,
                guid: `guid-${i}`,
            }))
            const result = filterArticles(articles, {
                filter: { limit: 3 },
                filterout: {},
            })
            expect(result).toHaveLength(3)
        })

        it('should apply filterout before filter', () => {
            const articles = [
                { ...baseArticle, id: 2, guid: 'guid-2', title: '重要广告', content: '广告内容' },
                { ...baseArticle, id: 3, guid: 'guid-3', title: '普通文章', content: '普通内容' },
            ]
            const result = filterArticles(articles, {
                filter: { title: '重要' },
                filterout: { content: '广告' },
            })
            expect(result).toHaveLength(0)
        })

        it('should handle invalid pubDate gracefully', () => {
            const articles = [
                { ...baseArticle, id: 2, guid: 'guid-2', pubDate: new Date('invalid') },
                { ...baseArticle, id: 3, guid: 'guid-3', pubDate: new Date() },
            ]
            const result = filterArticles(articles, {
                filter: { time: 3600 * 24 },
                filterout: {},
            })
            expect(result).toHaveLength(2)
        })

        it('should handle missing filter properties', () => {
            const articles = [baseArticle]
            const result = filterArticles(articles, {
                filter: {},
                filterout: {},
            })
            expect(result).toHaveLength(1)
        })
    })
})
