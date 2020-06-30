import { Router } from 'express';

const authRouter = Router();

authRouter.post('/register', () => console.log('register'));
authRouter.post('/login', () => {});
authRouter.get('/logout', () => {});

export default authRouter;
