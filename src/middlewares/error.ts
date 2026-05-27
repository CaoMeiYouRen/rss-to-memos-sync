import { Context } from 'hono'
import { HTTPException } from 'hono/http-exception'
import { ErrorHandler, HTTPResponseError, NotFoundHandler } from 'hono/types'
import { ContentfulStatusCode } from 'hono/utils/http-status'
import logger from '@/middlewares/logger'

export const errorhandler: ErrorHandler = (error: Error | HTTPResponseError, c: Context) => {
    const message = process.env.NODE_ENV === 'production' ? `${error.name}: ${error.message}` : error.stack
    let status: ContentfulStatusCode = 500
    if (error instanceof HTTPException) {
        const response = error.getResponse()
        if (response.status !== 101 && response.status !== 204 && response.status !== 205 && response.status !== 304) {
            status = response.status as ContentfulStatusCode
        }
    }
    const method = c.req.method
    const requestPath = c.req.path
    logger.error(`Error in ${method} ${requestPath}: \n${message}`)
    return c.json({
        status,
        message,
    }, status)
}

export const notFoundHandler: NotFoundHandler = (c: Context) => {
    const method = c.req.method
    const requestPath = c.req.path
    const message = `Cannot ${method} ${requestPath}`
    logger.warn(message)
    return c.json({
        status: 404,
        message,
    }, 404)
}
