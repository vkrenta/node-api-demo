import { Router } from 'express';
import createGroupControler from '../controllers/group/createGroup.controller';
import getAllGroupController from '../controllers/group/getAllGroup.controller';
import getByIdGroupController from '../controllers/group/getByIdCroup.controller';
import updateGroupController from '../controllers/group/updateGroup.controller';

const groupRouter = Router();

groupRouter.post('/create', createGroupControler);
groupRouter.get('/all', getAllGroupController);
groupRouter.get('/id=:id', getByIdGroupController);
groupRouter.put('/id=:id', updateGroupController);
groupRouter.delete('/id=:id');

export default groupRouter;
