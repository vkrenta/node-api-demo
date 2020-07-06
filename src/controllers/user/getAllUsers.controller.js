import User from '../../db/models/user.model';

const getAllUsersController = async (req, res, next) => {
  try {
    const dbUsers = await User.find().exec();
    if (!dbUsers.length) return res.status(204).end();
    const users = dbUsers.map((u) => {
      const { _id, login, firstName, lastName, role } = u;
      return { _id, login, firstName, lastName, role };
    });
    res.send({ users });
  } catch (e) {
    next(e);
  }
};

export default getAllUsersController;
