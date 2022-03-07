import { Router } from 'express';
import { RegisterController } from '../../../modules/Register/controllers/RegisterController';
import authMiddleware from '../middlewares/authMiddleware';

export const usersRoutes = Router();

const registerController = new RegisterController();

usersRoutes.get('/', authMiddleware, registerController.index);
usersRoutes.post('/', registerController.store);
usersRoutes.get('/:key', registerController.show);
usersRoutes.put('/', registerController.update);
