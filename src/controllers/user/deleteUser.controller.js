import User from '../../db/models/user.model';
import Student from '../../db/models/student.model';
import Teacher from '../../db/models/teacher.model';

const deleteUserController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).exec();
    if (!user) return res.status(204).end();
    await user.deleteOne();
    switch (user.role) {
      case 'student': {
        await Student.findOneAndDelete({ userId: id });
        break;
      }
      case 'teacher': {
        await Teacher.findOneAndDelete({ userId: id });
      }
    }
    res.send({ message: 'user deleted' });
  } catch (e) {
    next(e);
  }
};

export default deleteUserController;
