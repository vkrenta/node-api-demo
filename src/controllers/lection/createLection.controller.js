import getRequiredFields from '../../helpers/getRequiredFields';
import Teacher from '../../db/models/teacher.model';
import Group from '../../db/models/group.model';
import Lection from '../../db/models/lection.model';

const createLectionController = async (req, res, next) => {
  try {
    const { name, teacherId, groupId, order, day } = getRequiredFields(
      req,
      'name',
      'teacherId',
      'groupId',
      'order',
      'day'
    );

    const teacher = await Teacher.findById(teacherId).exec();
    if (!teacher)
      return res.status(400).send({ message: 'teacher doesnt exist' });
    const group = await Group.findById(groupId).exec();
    if (!group) return res.status(400).send({ message: 'group doesnt exist' });

    let existingLection = await Lection.findOne({ groupId, order, day }).exec();
    if (existingLection)
      return res
        .status(400)
        .send({ message: 'Lection already exists with this group' });
    existingLection = await Lection.findOne({ teacherId, order, day }).exec();
    if (existingLection)
      return res
        .status(400)
        .send({ message: 'Lection already exists with this teacher' });

    const lection = await new Lection({
      name,
      teacherId,
      groupId,
      order,
      day,
    }).save();

    res.status(201).send({ message: `created lection with id ${lection._id}` });
  } catch (e) {
    if (e.name && e.name === 'ValidationError')
      return res.status(400).send({ message: 'Invalid day of week' });
    next(e);
  }
};

export default createLectionController;
