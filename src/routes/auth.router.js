import { Router } from 'express';
import registerController from '../controllers/auth/register.controller';
import loginController from '../controllers/auth/login.controller';
import logoutController from '../controllers/auth/logout.controller';
import cookieMiddleware from '../middlewares/cookie.middleware';

const authRouter = Router();

authRouter.post('/register', registerController);
authRouter.post('/login', loginController);
authRouter.get('/logout', cookieMiddleware, logoutController);

export default authRouter;
