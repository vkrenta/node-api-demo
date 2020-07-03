import Group from '../../db/models/group.model';
import Department from '../../db/models/department.model';

const createGroupControler = async (req, res, next) => {
  try {
    const { name, departmentId } = req.body;

    if (!(name && departmentId))
      return res.status(400).send({ message: 'missing required fields' });

    const dep = await Department.findById(departmentId).exec();

    if (!dep)
      return res
        .status(400)
        .send({ message: `dep with id ${departmentId} doesn't exist` });

    await new Group({ name, departmentId }).save();

    res.status(201).send({ message: 'group created' });
  } catch (e) {
    next(e);
  }
};

export default createGroupControler;
