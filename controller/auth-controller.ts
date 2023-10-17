import { Context, Next } from "koa";
import { Existing, HttpException } from "../core/http-exception";

import res from "../core/result";

interface RegisterRequest {
  nickName: string;
  password: string;
  password2: string;
}

class AuthController{
   // 注册用户
  static async register(ctx: Context, next: Next): Promise<void> {
    const body = ctx.request.body as RegisterRequest; // 显式指定请求体的类型

    const { nickName, password2 } = body;
    console.log(nickName,password2);
    
    // 查找用户是否存在
    // const currentUser = await AdminModel.findOne({ nickName: nickName });
    // if (currentUser) {
    //   throw new Existing('用户已存在');
    // }

    // const user = await AdminModel.create({
    //   nickName: nickName,
    //   password: password2,
    // });

    ctx.status = 200;
    ctx.body = res.success('注册成功');
  }

}

export default AuthController