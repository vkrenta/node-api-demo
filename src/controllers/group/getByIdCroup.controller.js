import Group from '../../db/models/group.model';

const getByIdGroupController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const group = await Group.findById(id).exec();
    if (!group) return res.status(204).end();

    res.send({ group });
  } catch (e) {
    next(e);
  }
};

export default getByIdGroupController;
