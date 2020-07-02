import log from '../helpers/log';

const errorMiddleware = (err, req, res, next) => {
  if (err.kind && err.kind === 'ObjectId')
    return res.status(400).send({ message: 'Incorrect id' });

  log.error(err);
  res.status(500).send({ code: 500, message: err });
};

export default errorMiddleware;
