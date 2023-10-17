import Router from "@koa/router";
import jwt from "koa-jwt";
import UserController from "../controller/user-controller";

const userRouter = new Router();

userRouter.post('/user/register', UserController.register)

export default userRouter;
