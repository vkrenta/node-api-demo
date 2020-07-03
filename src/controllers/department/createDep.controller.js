import Department from '../../db/models/department.model';

const createDepController = async (req, res, next) => {
  const { name } = req.body;
  try {
    if (!name)
      return res.status(400).send({ message: 'Missing department name' });

    const dep = await new Department({ name }).save();

    res
      .status(201)
      .send({ message: `Department with id ${dep._id} has been created` });
  } catch (e) {
    next(e);
  }
};

export default createDepController;
