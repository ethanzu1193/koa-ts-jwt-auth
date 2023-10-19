import { Context, Next } from "koa";

import res from "../core/result";
import UserService from "../service/user";
import UserRegisterDto from "../dto/user-register";
import { validate } from 'class-validator';
import { ParameterException } from "../core/http-exception";
import { extractValidationErrors } from "../core/validationUtils";
import UserGetUserInfoDto from "../dto/user-get-user-info";



class UserController{
   // 注册用户
  static async register(ctx: Context, next: Next): Promise<void> {
    const dto = new UserRegisterDto()
    Object.assign(dto, ctx.request.body)
    //参数校验
    const errors = await validate(dto);
    if (errors.length > 0) {
      throw new ParameterException(extractValidationErrors(errors))
    }    

    const userService = new UserService();
    userService.register(dto)
    
    ctx.status = 200;
    ctx.body = res.success('注册成功');

  }

   // 获取用户信息
   static async getUserInfo(ctx: Context, next: Next): Promise<void> {
    const dto = new UserGetUserInfoDto()
    Object.assign(dto, ctx.request.body)
    //参数校验
    const errors = await validate(dto);
    if (errors.length > 0) {
      throw new ParameterException(extractValidationErrors(errors))
    }    

    const userService = new UserService();
    const userGetUserInfoResponse = await userService.getUserInfo(dto)
    
    ctx.status = 200;
    ctx.body = res.json(userGetUserInfoResponse,'注册成功');

  }

}

export default UserController;