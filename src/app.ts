import Koa = require('koa');
import {initConfig} from './config'
import catchError from './middleware/exception';
import KoaBouncer = require('koa-bouncer');
import bodyParser = require('koa-bodyparser');
import authRouter from './router/auth';
import Router = require('@koa/router');
import userRouter from './router/user';

initConfig() // 初始化配置

const app = new Koa();
//中间层加载

//异常处理
app.use(catchError)

//入参验证
app.use(KoaBouncer.middleware())
//Koa body parsing middleware
app.use(bodyParser({
  enableTypes: ['json', 'form', 'text']
}))


//加载router
app.use(authRouter.routes())
app.use(authRouter.allowedMethods())

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())


//服务启动
app.listen(process.env.SERVER_PORT, () => {
  console.log(`listen ${process.env.SERVER_PORT} ok`);
})