import Lection from '../../db/models/lection.model';

const deleteLectionController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const lection = await Lection.findById(id).exec();
    if (!lection) return res.status(204).end();
    await lection.deleteOne();
    res.send({ message: 'lection deleted' });
  } catch (e) {
    next(e);
  }
};

export default deleteLectionController;
