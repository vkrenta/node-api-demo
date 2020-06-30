import log from '../helpers/log';

const errorMiddleware = (err, req, res, next) => {
  log.error(err);
  res.status(500).send({ code: 500, message: err });
};

export default errorMiddleware;
