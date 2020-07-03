import Group from '../../db/models/group.model';

const getAllGroupController = async (req, res, next) => {
  try {
    const groups = await Group.find().exec();

    if (!groups.length) return res.status(204).end();

    res.send({ groups });
  } catch (e) {
    next(e);
  }
};

export default getAllGroupController;
