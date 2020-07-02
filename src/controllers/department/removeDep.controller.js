import Department from '../../db/models/department.model';

const removeDepController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const dep = await Department.findById(id).exec();
    if (!dep) return res.status(204).end();
    await dep.deleteOne();
    res.send({ message: 'dep deleted' });
  } catch (e) {
    next(e);
  }
};

export default removeDepController;
