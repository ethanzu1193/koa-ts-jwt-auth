import Router from "@koa/router";
import jwt from "koa-jwt";
import AuthController from "../controller/auth-controller";

const authRouter = new Router();

authRouter.post('/auth/login', AuthController.register)
authRouter.post('/auth/logout', AuthController.register)

export default authRouter;
