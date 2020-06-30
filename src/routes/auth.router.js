import { Router } from 'express';

const authRouter = Router();

authRouter.post('/register', () => {});
authRouter.post('/login', () => {});
authRouter.get('/logout', () => {});

export default authRouter;
