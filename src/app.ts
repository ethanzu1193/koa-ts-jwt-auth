import Koa = require('koa');
import { initConfig } from './config';
import catchError from './middleware/exception';
import KoaBouncer = require('koa-bouncer');
import bodyParser = require('koa-bodyparser');
import authRouter from './router/auth';
import Router = require('@koa/router');
import userRouter from './router/user';
import "reflect-metadata"

    
import { AppDataSource, initDataSource } from './data-source';

async function startServer() {
  try {
    // 初始化配置
     initConfig();

    const app = new Koa();

    // 异常处理
    app.use(catchError);
    
    // 入参验证
    app.use(KoaBouncer.middleware());

    // Koa body parsing middleware
    app.use(bodyParser({
      enableTypes: ['json', 'form', 'text']
    }));

    // 加载 router
    app.use(authRouter.routes());
    app.use(authRouter.allowedMethods());
    
    app.use(userRouter.routes());
    app.use(userRouter.allowedMethods());


    // 初始化数据库
    initDataSource();
    if (AppDataSource) {
      await AppDataSource.initialize();
      console.log("DB 初始化成功");
    }


    // 服务启动
    app.listen(process.env.SERVER_PORT, () => {
      console.log(`listen ${process.env.SERVER_PORT} ok`);
    });
    
  } catch (error) {
    console.error("发生错误:", error);
    process.exit(1);
  }
}

startServer();
