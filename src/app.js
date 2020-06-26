import express from 'express';
import log from './helpers/log';

const app = express();

app.listen(8000, () => log.info({ label: 'Listening port', message: 8000 }));
