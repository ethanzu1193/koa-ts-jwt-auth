import { Context } from "koa";

function registerValidator(ctx: Context): void {
  ctx
    .validateBody('nickName')
    .required('用户名是必须的')
    .isString()
    .trim()
    .isLength(3, 16, '用户名长度必须是3-16位');
}

function loginValidator(ctx: Context): void {
  ctx
    .validateBody('nickName')
    .required('用户名是必须的')
    .isString()
    .trim()
    .isLength(3, 16, '用户名长度必须是3-16位');
  ctx
    .validateBody('password')
    .required('密码是必须的')
    .isString()
    .trim()
    .isLength(6, 16, '密码至少6个字符,最多16个字符');
}

export { registerValidator, loginValidator };