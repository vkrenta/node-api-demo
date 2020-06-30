import express from 'express';
import cookieParser from 'cookie-parser';
import './config';
import log from './helpers/log';
import connectDB from './db';
import rootRouter from './routes';
import { logReq, logRes } from './middlewares/log.middleware';
import errorMiddleware from './middlewares/error.middleware';

const handler = (e) => log.error({ label: e.name, message: e.message });
process.on('uncaughtException', handler);
process.on('unhandledRejection', handler);

const app = express();
app.get('/favicon.ico', (req, res, next) => next());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logReq);
app.use(logRes);
app.use(rootRouter);
app.use(errorMiddleware);

const start = async () => {
  await connectDB();
  app.listen(8000, () =>
    log.info({ label: 'Listening port', message: process.env.PORT })
  );
};

start();
