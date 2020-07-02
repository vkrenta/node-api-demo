import Department from '../../db/models/department.model';

const getDepByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const dep = await Department.findById(id);

    if (!dep) return res.status(204).end();

    res.send({ department: dep });
  } catch (e) {
    next(e);
  }
};

export default getDepByIdController;
