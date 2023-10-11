import Router from 'koa-router'
import { TestController } from '../controller'

const testRouter = new Router()
testRouter.get('/', async (ctx, next) => { 
  TestController.testGetRequest(ctx, next)
})

export default testRouter
