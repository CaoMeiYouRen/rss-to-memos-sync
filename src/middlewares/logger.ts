import path from 'path'
import { LOGFILES, LOG_LEVEL } from '@/env'
import winston from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
import { logger as honoLogger } from 'hono/logger'

async function createLogger() {
    const logDir = path.join(process.cwd(), 'logs')
    const format = winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
        winston.format.align(),
        winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
    )

    const dailyRotateFileOption = {
        dirname: logDir,
        datePattern: 'YYYY-MM-DD',
        zippedArchive: false,
        maxSize: '20m',
        maxFiles: '31d',
        format,
        auditFile: path.join(logDir, '.audit.json'),
    }
    const winstonLogger = winston.createLogger({
        level: LOG_LEVEL,
        exitOnError: false,
        transports: [
            new winston.transports.Console({
                format: winston.format.combine(
                    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
                    winston.format.ms(),
                    winston.format.printf((info) => {
                        const infoLevel = winston.format.colorize().colorize(info.level, `[${info.timestamp}] ${info.level}`)
                        return `${infoLevel}: ${info.message}`
                    }),
                ),
            }),
            ...(LOGFILES
                ? [
                    new DailyRotateFile({
                        ...dailyRotateFileOption,
                        filename: '%DATE%.log',
                    }),
                    new DailyRotateFile({
                        ...dailyRotateFileOption,
                        filename: '%DATE%.error.log',
                        level: 'error',
                    }),
                ]
                : []),
        ],
        exceptionHandlers: LOGFILES
            ? [
                new DailyRotateFile({
                    ...dailyRotateFileOption,
                    level: 'error',
                    filename: '%DATE%.exception.log',
                }),
            ]
            : [],
        rejectionHandlers: LOGFILES
            ? [
                new DailyRotateFile({
                    ...dailyRotateFileOption,
                    level: 'error',
                    filename: '%DATE%.rejection.log',
                }),
            ]
            : [],
    })
    return winstonLogger
}

const logger = await createLogger()
const loggerMiddleware = honoLogger((message: string) => logger.info(message))
export { loggerMiddleware }
export default logger
