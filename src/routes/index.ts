import { Router } from 'express';
import * as questionController from '../controllers/question.controller';

const router = Router();

router.get('/questions', questionController.index);
router.get('/questions/:id', questionController.show);
router.post('/questions', questionController.store);
router.patch('/questions/:id', questionController.update);
router.delete('/questions/:id', questionController.remove);

export default router;
