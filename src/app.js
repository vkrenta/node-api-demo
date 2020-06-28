import express from 'express';
import './config';
import log from './helpers/log';
import connectDB from './db';

const app = express();

const start = async () => {
  await connectDB();
  app.listen(8000, () =>
    log.info({ label: 'Listening port', message: process.env.PORT })
  );
};

start();
