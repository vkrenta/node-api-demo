import Lection from '../../db/models/lection.model';
import Group from '../../db/models/group.model';
import Teacher from '../../db/models/teacher.model';
import User from '../../db/models/user.model';

const getLectionController = async (req, res, next) => {
  try {
    let schedule = await Lection.find(req.params).exec();
    schedule = await Promise.all(
      schedule.map(async (lection) => {
        const group = await Group.findById(lection.groupId).exec();
        const teacher = await Teacher.findById(lection.teacherId).exec();
        const userTeacher = { ...(await User.findById(teacher.userId).exec()) }
          ._doc;
        userTeacher.password = undefined;
        const x = { ...lection }._doc;

        x.groupName = group.name;
        x.teacherAccount = userTeacher;
        return x;
      })
    );

    if (!schedule.length) return res.status(204).end();

    res.send({ schedule });
  } catch (e) {
    next(e);
  }
};

export default getLectionController;
