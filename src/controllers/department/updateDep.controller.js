import Department from '../../db/models/department.model';

const updateDepController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name)
      return res.status(400).send({ message: 'name field is missing' });

    const dep = await Department.findById(id).exec();

    if (!dep) return res.status(204).end();

    dep.name = name;
    await dep.save();
    res.send({ message: 'dep name changed!' });
  } catch (e) {
    next(e);
  }
};

export default updateDepController;
