import { Middleware } from 'koa';
import { ValidationError } from 'koa-bouncer';
import { HttpException } from '../core/http-exception';

const catchError: Middleware = async (ctx, next) => {
  try {
    await next();
  } catch (error:any) {
    if (error instanceof ValidationError) {
      ctx.body = {
        name: error.name,
        message: error.message,
        request: `${ctx.method} ${ctx.path}`,
      };
    } else if (error instanceof HttpException) {
      const httpException = error as HttpException;
      ctx.status = httpException.code;
      ctx.body = {
        msg: httpException.msg,
        errorCode: httpException.errorCode,
        request: `${ctx.method} ${ctx.path}`,
      };
    } else if ((error as any).status === 401) {
      ctx.status = 401;
      ctx.body = {
        msg: '认证失败，请登录后重试',
        errorCode: 10002,
        request: `${ctx.method} ${ctx.path}`,
      };
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