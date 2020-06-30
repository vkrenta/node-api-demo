import { hash } from 'bcryptjs';
import User from '../../db/models/user.model';
import Teacher from '../../db/models/teacher.model';
import Student from '../../db/models/student.model';

const registerController = async (req, res, next) => {
  try {
    const {
      login,
      firstName,
      lastName,
      role,
      departmentId,
      groupId,
    } = req.body;
    let { password } = req.body;
    if (!(login && password && role))
      return res.status(400).send({ message: 'Missing required fields' });

    password = await hash(password, Number(process.env.SALT_ROUNDS));
    let user;
    switch (role) {
      case 'admin':
        user = await new User({
          login,
          firstName,
          lastName,
          role,
          password,
        }).save();
        return res.send({ message: `Admin with login ${user.login} created` });
      case 'teacher':
        if (!departmentId)
          return res.status(400).send({ message: 'Missing department id' });
        user = await new User({
          login,
          firstName,
          lastName,
          role,
          password,
        }).save();
        await new Teacher({ departmentId, userId: user._id }).save();
        return res.send({
          message: `Teacher with login ${user.login} created`,
        });
      case 'student':
        if (!groupId)
          return res.status(400).send({ message: 'Missing group id' });
        user = await new User({
          login,
          firstName,
          lastName,
          role,
          password,
        }).save();
        await new Student({ groupId, userId: user._id }).save();
        return res.send({
          message: `Student with login ${user.login} created`,
        });
      default:
        return res.status(400).send({ message: 'Invalid role' });
    }
  } catch (e) {
    next(e);
  }
};

export default registerController;
