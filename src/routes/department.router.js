import { Router } from 'express';
import getAllDepController from '../controllers/department/getAllDep.controller';
import createDepController from '../controllers/department/createDep.controller';
import getDepByIdController from '../controllers/department/getDepById.controller';
import updateDepController from '../controllers/department/updateDep.controller';
import removeDepController from '../controllers/department/removeDep.controller';

const departmentRouter = Router();

departmentRouter.get('/all', getAllDepController);
departmentRouter.get('/id=:id', getDepByIdController);
departmentRouter.post('/create', createDepController);
departmentRouter.put('/id=:id', updateDepController);
departmentRouter.delete('/id=:id', removeDepController);

export default departmentRouter;
