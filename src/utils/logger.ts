import { getRuntimeKey } from 'hono/adapter'

type LogLevel = 'silly' | 'debug' | 'verbose' | 'info' | 'warn' | 'error' | 'http'

const LOG_LEVELS: Record<LogLevel, number> = {
    silly: 0,
    debug: 1,
    verbose: 2,
    info: 3,
    warn: 4,
    error: 5,
    http: 6,
}

const DEFAULT_LOG_LEVEL = 'info'
const currentLevel = LOG_LEVELS[DEFAULT_LOG_LEVEL as LogLevel] ?? LOG_LEVELS.info

function shouldLog(level: LogLevel): boolean {
    return LOG_LEVELS[level] >= currentLevel
}

function formatMessage(level: LogLevel, message: string, ...args: unknown[]): string {
    const timestamp = new Date().toISOString()
    const prefix = `[${timestamp}] [${level.toUpperCase()}]`
    const argsStr = args.length > 0 ? ` ${args.map((a) => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' ')}` : ''
    return `${prefix} ${message}${argsStr}`
}

function log(level: LogLevel, message: string, ...args: unknown[]): void {
    if (!shouldLog(level)) {
        return
    }
    const formatted = formatMessage(level, message, ...args)
    if (getRuntimeKey() === 'workerd') {
        if (level === 'error') {
            console.error(formatted)
        } else if (level === 'warn') {
            console.warn(formatted)
        } else {
            console.log(formatted)
        }
    } else if (level === 'error') {
        console.error(formatted)
    } else if (level === 'warn') {
        console.warn(formatted)
    } else {
        console.log(formatted)
    }
}

export const logger = {
    silly: (message: string, ...args: unknown[]) => log('silly', message, ...args),
    debug: (message: string, ...args: unknown[]) => log('debug', message, ...args),
    verbose: (message: string, ...args: unknown[]) => log('verbose', message, ...args),
    info: (message: string, ...args: unknown[]) => log('info', message, ...args),
    warn: (message: string, ...args: unknown[]) => log('warn', message, ...args),
    error: (message: string, ...args: unknown[]) => log('error', message, ...args),
    log: (message: string, ...args: unknown[]) => log('info', message, ...args),
}
