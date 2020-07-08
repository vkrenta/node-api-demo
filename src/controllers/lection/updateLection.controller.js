import getRequiredFields from '../../helpers/getRequiredFields';
import Lection from '../../db/models/lection.model';

const updateLectionController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { fields } = getRequiredFields(req, 'fields');

    const lection = await Lection.findById(id).exec();
    if (!lection) return res.status(204).end();
    await lection.updateOne(fields).exec();
    res.send({ message: 'lection updated' });
  } catch (e) {
    next(e);
  }
};

export default updateLectionController;
