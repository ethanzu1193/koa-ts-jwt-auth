import Router from "@koa/router";
import jwt from "koa-jwt";
import AuthController from "../controller/auth-controller";

const authRouter = new Router();

authRouter.post('/auth/login', AuthController.login)
authRouter.post('/auth/logout',jwt({secret: process.env.JWT_SECRET as string}), AuthController.logOut)

export default authRouter;
