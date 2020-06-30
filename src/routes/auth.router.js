import { Router } from 'express';
import registerController from '../controllers/auth/register.controller';

const authRouter = Router();

authRouter.post('/register', registerController);
authRouter.post('/login', () => {});
authRouter.get('/logout', () => {});

export default authRouter;
