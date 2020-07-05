import { hash } from 'bcryptjs';
import User from '../../db/models/user.model';
import Teacher from '../../db/models/teacher.model';
import Student from '../../db/models/student.model';
import Department from '../../db/models/department.model';
import Group from '../../db/models/group.model';

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

    const existingUser = await User.findOne({ login }).exec();
    if (existingUser)
      return res.status(400).send({ message: 'User already exists' });

    password = await hash(password, Number(process.env.SALT_ROUNDS));

    switch (role) {
      case 'admin': {
        const user = await new User({
          login,
          firstName,
          lastName,
          role,
          password,
        }).save();
        return res
          .status(201)
          .send({ message: `Admin with login ${user.login} created` });
      }
      case 'teacher': {
        if (!departmentId) {
          return res.status(400).send({ message: 'Missing department id' });
        }
        const department = await Department.findById(departmentId).exec();
        if (!department)
          return res.status(400).send({ message: 'Department doesnt exist' });
        const user = await new User({
          login,
          firstName,
          lastName,
          role,
          password,
        }).save();

        await new Teacher({ departmentId, userId: user._id }).save();
        return res.status(201).send({
          message: `Teacher with login ${user.login} created`,
        });
      }
      case 'student': {
        if (!groupId) {
          return res.status(400).send({ message: 'Missing group id' });
        }
        const group = await Group.findById(groupId).exec();
        if (!group)
          return res.status(400).send({ message: 'group doesnt exist' });
        const user = await new User({
          login,
          firstName,
          lastName,
          role,
          password,
        }).save();
        await new Student({ groupId, userId: user._id }).save();
        return res.status(201).send({
          message: `Student with login ${user.login} created`,
        });
      }
      default:
        return res.status(400).send({ message: 'Invalid role' });
    }
  } catch (e) {
    next(e);
  }
};

export default registerController;
