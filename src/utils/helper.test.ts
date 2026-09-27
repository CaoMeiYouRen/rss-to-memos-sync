import { describe, it, expect } from 'vitest'
import { parseDataSize, htmlToMarkdown } from './helper'

describe('helper', () => {
    describe('parseDataSize', () => {
        it('should return number as-is', () => {
            expect(parseDataSize(1024)).toBe(1024)
            expect(parseDataSize(0)).toBe(0)
            expect(parseDataSize(1000000)).toBe(1000000)
        })

        it('should parse string with units', () => {
            expect(parseDataSize('1 KiB')).toBe(1024)
            expect(parseDataSize('1 MiB')).toBe(1024 * 1024)
            expect(parseDataSize('1 GiB')).toBe(1024 * 1024 * 1024)
            expect(parseDataSize('1 KB')).toBe(1000)
            expect(parseDataSize('1 MB')).toBe(1000 * 1000)
            expect(parseDataSize('1 GB')).toBe(1000 * 1000 * 1000)
        })

        it('should parse string without units', () => {
            expect(parseDataSize('1024')).toBe(1024)
            expect(parseDataSize('0')).toBe(0)
        })
    })

    describe('htmlToMarkdown', () => {
        it('should convert simple HTML to markdown', () => {
            const html = '<p>Hello <strong>world</strong></p>'
            const result = htmlToMarkdown(html)
            expect(result).toContain('Hello **world**')
        })

        it('should convert headings', () => {
            const html = '<h1>Title</h1><h2>Subtitle</h2>'
            const result = htmlToMarkdown(html)
            expect(result).toContain('# Title')
            expect(result).toContain('## Subtitle')
        })

        it('should convert links', () => {
            const html = '<a href="https://example.com">Link</a>'
            const result = htmlToMarkdown(html)
            expect(result).toContain('[Link](https://example.com)')
        })

        it('should convert images', () => {
            const html = '<img src="image.png" alt="Image" />'
            const result = htmlToMarkdown(html)
            expect(result).toContain('![Image](image.png)')
        })

        it('should convert lists', () => {
            const html = '<ul><li>Item 1</li><li>Item 2</li></ul>'
            const result = htmlToMarkdown(html)
            expect(result).toContain('-   Item 1')
            expect(result).toContain('-   Item 2')
        })

        it('should convert ordered lists', () => {
            const html = '<ol><li>First</li><li>Second</li></ol>'
            const result = htmlToMarkdown(html)
            expect(result).toContain('1.  First')
            expect(result).toContain('2.  Second')
        })

        it('should convert code blocks', () => {
            const html = '<pre><code>const x = 1</code></pre>'
            const result = htmlToMarkdown(html)
            expect(result).toContain('const x = 1')
        })

        it('should convert inline code', () => {
            const html = '<p>Use <code>console.log()</code> to debug</p>'
            const result = htmlToMarkdown(html)
            expect(result).toContain('`console.log()`')
        })

        it('should convert blockquotes', () => {
            const html = '<blockquote>Quote</blockquote>'
            const result = htmlToMarkdown(html)
            expect(result).toContain('> Quote')
        })

        it('should convert horizontal rules', () => {
            const html = '<hr />'
            const result = htmlToMarkdown(html)
            expect(result).toContain('---')
        })

        it('should handle nested elements', () => {
            const html = '<div><p>Text <em>italic</em> and <strong>bold</strong></p></div>'
            const result = htmlToMarkdown(html)
            expect(result).toContain('Text _italic_ and **bold**')
        })

        it('should handle empty input', () => {
            expect(htmlToMarkdown('')).toBe('')
            expect(htmlToMarkdown('<p></p>')).toBe('')
        })
    })
})
