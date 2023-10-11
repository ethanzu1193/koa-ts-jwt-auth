import { Context } from 'koa'
import res from '../core/result'

export class TestController{
  static async testGetRequest(ctx:Context, next:() => Promise<void>) { 
    ctx.status = 200
    ctx.body = res.success("request success")
  }
}

