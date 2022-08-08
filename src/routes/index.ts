import { Router } from 'express';
import * as questionController from '../controllers/question.controller';

const router = Router();

router.get('/questions', questionController.index);
router.get('/questions/:id', questionController.show);
router.get('/questions', questionController.store);
router.get('/questions/:id', questionController.update);
router.get('/questions/:id', questionController.remove);

export default router;
