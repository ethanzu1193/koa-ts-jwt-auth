import Router from "@koa/router";
import jwt from "koa-jwt";
import UserController from "../controller/user-controller";
import { config } from '../config';

const userRouter = new Router();

userRouter.post('/user/register', UserController.register)
userRouter.post('/user/getUserInfo',jwt({secret: config.SECRET_KEY }), UserController.getUserInfo)
export default userRouter;
