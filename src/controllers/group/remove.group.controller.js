import Group from '../../db/models/group.model';

const removeGroupController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const group = await Group.findById(id).exec();
    if (!group) return res.status(204).end();
    await group.deleteOne();
    res.send({ message: 'group deleted' });
  } catch (e) {
    next(e);
  }
};

export default removeGroupController;
