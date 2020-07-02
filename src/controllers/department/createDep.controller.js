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
    if (e.code && e.code === 11000)
      return res
        .status(400)
        .send({ message: `Department with name ${name} already exists` });
    next(e);
  }
};

export default createDepController;
