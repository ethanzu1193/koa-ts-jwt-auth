import Router from "@koa/router";
import jwt from "koa-jwt";
import UserController from "../controller/user-controller";

const userRouter = new Router();

userRouter.post('/user/register', UserController.register)
userRouter.get('/user/getUserInfo',jwt({secret: process.env.JWT_SECRET as string}), UserController.getUserInfo)
export default userRouter;
