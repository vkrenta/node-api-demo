import { Router } from 'express';

const userRouter = Router();

userRouter.get('/:id', () => {});
userRouter.get('/all', () => {});
userRouter.put('/:id', () => {});
userRouter.delete('/:id', () => {});

userRouter.get('/student/:id', () => {});
userRouter.get('/student/all', () => {});

userRouter.get('/teacher/:id', () => {});
userRouter.get('/teacher/all', () => {});

export default userRouter;
