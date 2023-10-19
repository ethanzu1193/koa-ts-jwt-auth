import { Context, Next } from "koa";
import { validate } from 'class-validator';
import { ParameterException } from "../core/http-exception";
import { extractValidationErrors } from "../core/validationUtils";

import res from "../core/result";
import UserLoginDto from "../dto/user-login";
import AuthService from "../service/auth";
import UserLogOutDto from "../dto/user-logOut";

class AuthController{
  // 用户登录
  static async login(ctx: Context, next: Next): Promise<void> {
    const dto = new UserLoginDto()
    Object.assign(dto, ctx.request.body)
    //参数校验
    const errors = await validate(dto);
    if (errors.length > 0) {
      throw new ParameterException(extractValidationErrors(errors))
    }    

    const authService = new AuthService();
    authService.login(dto)
    
    ctx.status = 200;
    ctx.body = res.success('注册成功');

  }

  // 用户登出
  static async logOut(ctx: Context, next: Next): Promise<void> {
    const dto = new UserLogOutDto()
    Object.assign(dto, ctx.request.body)
    //参数校验
    const errors = await validate(dto);
    if (errors.length > 0) {
      throw new ParameterException(extractValidationErrors(errors))
    }    

    const authService = new AuthService();
    authService.logOut(dto)
    
    ctx.status = 200;
    ctx.body = res.success('注册成功');

  }

}

export default AuthController