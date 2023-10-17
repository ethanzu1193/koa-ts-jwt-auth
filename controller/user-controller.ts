import { Context, Next } from "koa";

import res from "../core/result";
import UserService from "../service/user";
import UserRegisterDto from "../dto/user-register";

import { validate } from 'class-validator';
import { ParameterException } from "../core/http-exception";


class UserController{
   // 注册用户
  static async register(ctx: Context, next: Next): Promise<void> {
    const dto = new UserRegisterDto()
    Object.assign(dto, ctx.request.body)

    const errors = await validate(dto);
    if (errors.length > 0) {
      throw new ParameterException()
    }    

    const userService = new UserService();
    userService.register(dto)
    
    ctx.status = 200;
    ctx.body = res.success('注册成功');

  }

}

export default UserController;