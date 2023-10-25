import Router from "@koa/router";
import AuthController from "../controller/auth-controller";

const authRouter = new Router();

authRouter.post('/auth/login', AuthController.login)

export default authRouter;
