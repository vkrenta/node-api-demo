import { Router } from 'express';
import authRouter from './auth.router';
import userRouter from './user.router';
import groupRouter from './group.router';
import lectionRouter from './lection.router';
import departmentRouter from './department.router';

const rootRouter = Router();

rootRouter.use('/api/auth', authRouter);
rootRouter.use('/api/user', userRouter);
rootRouter.use('/api/group', groupRouter);
rootRouter.use('/api/lection', lectionRouter);
rootRouter.use('/api/department', departmentRouter);

export default rootRouter;
