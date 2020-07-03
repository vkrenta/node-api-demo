import Group from '../../db/models/group.model';
import Department from '../../db/models/department.model';

const updateGroupController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, departmentId } = req.body;

    if (departmentId) {
      const dep = await Department.findById(departmentId).exec();
      if (!dep)
        return res
          .status(400)
          .send({ message: "dep with this id doesn't exist" });
    }

    const group = await Group.findById(id).exec();

    if (!group) return res.status(204).end();

    if (name) group.name = name;
    if (departmentId) group.departmentId = departmentId;
    await group.save();
    res.send({ message: 'group data changed!' });
  } catch (e) {
    next(e);
  }
};

export default updateGroupController;
