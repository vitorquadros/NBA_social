import { Router } from 'express';
import { RegisterController } from '../../../modules/Register/controllers/RegisterController';
import authMiddleware from '../middlewares/authMiddleware';

export const usersRoutes = Router();

const registerController = new RegisterController();

usersRoutes.get('/', authMiddleware, registerController.index);
usersRoutes.post('/register', registerController.store);
usersRoutes.get('/register/:key', registerController.show);
usersRoutes.put('/register', registerController.update);
usersRoutes.delete('/', authMiddleware, registerController.delete);
