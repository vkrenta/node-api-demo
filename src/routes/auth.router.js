import { Router } from 'express';
import registerController from '../controllers/auth/register.controller';
import loginController from '../controllers/auth/login.controller';
import logoutController from '../controllers/auth/logout.controller';

const authRouter = Router();

authRouter.post('/register', registerController);
authRouter.post('/login', loginController);
authRouter.get('/logout', logoutController);

export default authRouter;
