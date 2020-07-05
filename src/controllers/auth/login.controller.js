import User from '../../db/models/user.model';
import { compare } from 'bcryptjs';

const loginController = async (req, res, next) => {
  try {
    const { login, password, remember } = req.body;

    if (!(login && password))
      return res.status(400).send({ message: `missing required fields` });

    const user = await User.findOne({ login }).exec();

    if (!user) return res.status(401).send({ message: 'user doesnt exist' });

    const compared = await compare(password, user.password);

    if (!compared) return res.status(401).send({ message: 'invalid password' });

    const cookieOptions = {
      httpOnly: true,
      signed: true,
    };

    if (remember) cookieOptions.maxAge = 3600000 * 24;
    res
      .cookie('userId', user._id, cookieOptions)
      .cookie('role', user.role, cookieOptions)
      .end();
  } catch (e) {
    next(e);
  }
};

export default loginController;
