import Router from 'express';
import CreateUserController from './controllers/CreateUserController';
import SessionController from './controllers/SessionController';

const createUserController = new CreateUserController();
const sessionController = new SessionController();
const router = Router();

router.post('/session', sessionController.store)

router.post('/users', createUserController.handle)

export default router;
