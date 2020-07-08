import { Router } from 'express';
import createLectionController from '../controllers/lection/createLection.controller';
import getLectionController from '../controllers/lection/getLection.controller';
import updateLectionController from '../controllers/lection/updateLection.controller';
import deleteLectionController from '../controllers/lection/deleteLection.controller';

const lectionRouter = Router();

lectionRouter.get('/groupId=:groupId', getLectionController);
lectionRouter.get('/teacherId=:teacherId', getLectionController);
lectionRouter.post('/create', createLectionController);
lectionRouter.put('/id=:id', updateLectionController);
lectionRouter.delete('/id=:id', deleteLectionController);

export default lectionRouter;
