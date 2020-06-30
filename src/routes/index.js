import authRouter from './auth.router';
import userRouter from './user.router';
import groupRouter from './group.router';
import lectionRouter from './lection.router';

const useRoutes = (app) => {
  app.use('/api/auth', authRouter);
  app.use('/api/user', userRouter);
  app.use('/api/group', groupRouter);
  app.use('/api/lection', lectionRouter);
};

export default useRoutes;
