import Department from '../../db/models/department.model';

const getAllDepController = async (req, res, next) => {
  try {
    const deps = await Department.find();

    if (!deps.length) return res.status(204).end();

    res.send({ departments: deps });
  } catch (e) {
    next(e);
  }
};

export default getAllDepController;
