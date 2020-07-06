import { Router } from 'express';
import getUserController from '../controllers/user/getUser.controller';
import getAllUsersController from '../controllers/user/getAllUsers.controller';
import updateUserController from '../controllers/user/updateUser.controller';
import deleteUserController from '../controllers/user/deleteUser.controller';

const userRouter = Router();

userRouter.get('/id=:id', getUserController);
userRouter.get('/all', getAllUsersController);
userRouter.put('/id=:id', updateUserController);
userRouter.delete('/id=:id', deleteUserController);

userRouter.get('/student/:id');
userRouter.get('/student/all');
userRouter.put('/student/id=:id');
userRouter.delete('/student/id=:id');

userRouter.get('/teacher/:id');
userRouter.get('/teacher/all');
userRouter.put('/teacher/id=:id');
userRouter.delete('/teacher/id=:id');

export default userRouter;
