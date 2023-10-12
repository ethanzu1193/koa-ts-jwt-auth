import { Middleware } from 'koa';
import bouncer, { ValidationError } from 'koa-bouncer';
import { HttpException } from '../core/http-exception';

const catchError: Middleware = async (ctx, next) => {
  try {
    console.log("catchError");
    await next();
  } catch (error) {
    console.log(error);
    
    // 判断校验类型错误
    if (error instanceof ValidationError) {
      ctx.body = {
        name: error.name,
        message: error.message,
        request: `${ctx.method} ${ctx.path}`,
      };
      return;
    } else if (error instanceof HttpException) {
      const httpException = error as HttpException;
      ctx.status = httpException.code;
      ctx.body = {
        msg: httpException.msg,
        errorCode: httpException.errorCode,
        request: `${ctx.method} ${ctx.path}`,
      };
      return;
    } else {
      ctx.status = 500;
      ctx.body = {
        msg: '未知错误',
        errorCode: 99999,
        request: `${ctx.method} ${ctx.path}`,
      };
    }
  }
};

export default catchError;
