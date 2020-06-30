import { Router } from 'express';

const lectionRouter = Router();

lectionRouter.get('/group/:id', () => {});
lectionRouter.get('/teacher/:id', () => {});
lectionRouter.post('/create', () => {});
lectionRouter.put('/:id', () => {});
lectionRouter.delete('/:id', () => {});

export default lectionRouter;
