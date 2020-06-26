import { format, createLogger, transports } from 'winston';

const mFormat = format.printf(({ level, message, timestamp, label }) => {
  let result;
  if (typeof message === 'string') result = message;
  else result = JSON.stringify(message, null, '  ');

  if (!label)
    return `[${timestamp
      .replace('T', ' ')
      .replace('Z', '')}] [${level.toUpperCase()}]: ${result}`;
  return `[${timestamp
    .replace('T', ' ')
    .replace('Z', '')}] [${level.toUpperCase()}] [${label}]: ${result}`;
});

const log = createLogger({
  format: format.combine(format.timestamp(), mFormat),
});

if (process.env.ENV !== 'PROD') {
  log.add(new transports.Console());
}

export default log;
