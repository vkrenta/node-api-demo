import log from '../helpers/log';

const cookieMiddleware = (req, res, next) => {
  const { userId, role } = req.signedCookies;

  if (!(userId && role)) return res.status(401).send({ message: 'no cooks' });
  log.info({ label: 'COOKIES', message: req.signedCookies });
  req.userId = userId;
  req.role = role;

  next();
};

export default cookieMiddleware;
