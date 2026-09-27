import { logger as honoLogger } from 'hono/logger'
import { logger } from '@/utils/logger'

const loggerMiddleware = honoLogger((message: string) => logger.info(message))
export { loggerMiddleware }
export { logger }
