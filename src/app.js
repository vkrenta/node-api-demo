import express from 'express';
import cookieParser from 'cookie-parser';
import './config';
import log from './helpers/log';
import connectDB from './db';
import useRoutes from './routes';

const handler = (e) => log.error({ label: e.name, message: e.message });
process.on('uncaughtException', handler);
process.on('unhandledRejection', handler);

const app = express();
app.get('/favicon.ico', (req, res, next) => next());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

useRoutes(app);

const start = async () => {
  await connectDB();
  app.listen(8000, () =>
    log.info({ label: 'Listening port', message: process.env.PORT })
  );
};

start();
