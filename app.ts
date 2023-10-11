import Koa = require('koa');
import dotenv from 'dotenv'
import { join } from 'path'
import { logger } from './core/log'
import testRouter from './router/testRouter'


const result = dotenv.config({ path: join(__dirname, './.env') })
if (result.error) {
  logger.error('Environment variable not loaded: not found ".env" file.')
  process.exit(1); 
}
logger.info('Environment variable loaded.')

const app = new Koa();
app.use(testRouter.routes())
app.use(testRouter.allowedMethods())
app.listen(process.env.SERVER_PORT, () => {
  console.log(`listen ${process.env.SERVER_PORT} ok`);
})