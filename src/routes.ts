import Router from 'express';
import CreateUserController from './controllers/CreateUserController';
import CreateTagController from './controllers/CreateTagController';
import { ensureAdmin } from './middlewares/ensureAdmin';

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const router = Router();


router.post('/tags', ensureAdmin, createTagController.handle)
router.post('/users', createUserController.handle)

export default router;
