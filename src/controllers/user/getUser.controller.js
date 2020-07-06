import User from '../../db/models/user.model';

const getUserController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).exec();
    if (!user) return res.status(204).end();
    const { login, firstName, lastName, role } = user;
    res.send({ user: { login, firstName, lastName, role } });
  } catch (e) {
    next(e);
  }
};

export default getUserController;
