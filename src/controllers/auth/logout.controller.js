const logoutController = (req, res, next) => {
  try {
    res.clearCookie('userId').clearCookie('role').end();
  } catch (e) {
    next(e);
  }
};

export default logoutController;
