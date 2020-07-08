import log from '../helpers/log';

const errorMiddleware = (err, req, res, next) => {
  if (err.code === 666228) {
    return res
      .status(400)
      .send({ message: `Missing required fields: ${err.nulled}` });
  }

  if (err.code && err.code === 11000)
    return res.status(400).send({
      message: `Document with ${JSON.stringify(err.keyValue)} already exists`,
    });

  if (err.kind && err.kind === 'ObjectId')
    return res.status(400).send({ message: 'Incorrect id' });

  log.error(`[Error name] ${err.name}\n[Error code] ${err.code}\n${err.stack}`);
  res.status(500).send({ message: err.stack });
};

export default errorMiddleware;
