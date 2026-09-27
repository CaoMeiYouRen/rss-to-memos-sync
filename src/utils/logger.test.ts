import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { logger } from './logger'

describe('logger', () => {
    let consoleSpy: ReturnType<typeof vi.spyOn>

    beforeEach(() => {
        consoleSpy = vi.spyOn(console, 'log').mockImplementation(vi.fn())
        vi.spyOn(console, 'warn').mockImplementation(vi.fn())
        vi.spyOn(console, 'error').mockImplementation(vi.fn())
    })

    afterEach(() => {
        consoleSpy.mockRestore()
    })

    it('should log info messages', () => {
        logger.info('Test message')
        expect(consoleSpy).toHaveBeenCalled()
        const call = consoleSpy.mock.calls[0][0]
        expect(call).toContain('[INFO]')
        expect(call).toContain('Test message')
    })

    it('should log error messages to console.error', () => {
        const errorSpy = vi.spyOn(console, 'error').mockImplementation(vi.fn())
        logger.error('Error message')
        expect(errorSpy).toHaveBeenCalled()
        const call = errorSpy.mock.calls[0][0]
        expect(call).toContain('[ERROR]')
        expect(call).toContain('Error message')
        errorSpy.mockRestore()
    })

    it('should log warn messages to console.warn', () => {
        const warnSpy = vi.spyOn(console, 'warn').mockImplementation(vi.fn())
        logger.warn('Warning message')
        expect(warnSpy).toHaveBeenCalled()
        const call = warnSpy.mock.calls[0][0]
        expect(call).toContain('[WARN]')
        expect(call).toContain('Warning message')
        warnSpy.mockRestore()
    })

    it('should log info messages (replacing debug test)', () => {
        logger.info('Info message')
        expect(consoleSpy).toHaveBeenCalled()
        const call = consoleSpy.mock.calls[0][0]
        expect(call).toContain('[INFO]')
        expect(call).toContain('Info message')
    })

    it('should log with additional arguments', () => {
        logger.info('Message with object', { key: 'value' })
        expect(consoleSpy).toHaveBeenCalled()
        const call = consoleSpy.mock.calls[0][0]
        expect(call).toContain('key')
        expect(call).toContain('value')
    })

    it('should log with Error object to console.error', () => {
        const errorSpy = vi.spyOn(console, 'error').mockImplementation(vi.fn())
        const error = new Error('Test error')
        logger.error('Error occurred', error)
        expect(errorSpy).toHaveBeenCalled()
        const call = errorSpy.mock.calls[0][0]
        expect(call).toContain('Error occurred')
        expect(call).toContain('{}') // Error object is serialized as {}
        errorSpy.mockRestore()
    })

    it('should have log alias for info', () => {
        logger.log('Log alias')
        expect(consoleSpy).toHaveBeenCalled()
        const call = consoleSpy.mock.calls[0][0]
        expect(call).toContain('[INFO]')
        expect(call).toContain('Log alias')
    })
})
