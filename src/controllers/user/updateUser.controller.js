import User from '../../db/models/user.model';
import getRequiredFields from '../../helpers/getRequiredFields';

const updateUserController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { fields } = getRequiredFields(req, 'fields');

    const user = await User.findById(id).exec();
    if (!user) return res.status(204).end();
    await user.updateOne(fields).exec();

    res.send({ message: 'user updated' });
  } catch (e) {
    next(e);
  }
};

export default updateUserController;
