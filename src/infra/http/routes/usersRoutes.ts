import { Router } from 'express';
import { CreateUserController } from '../../../modules/Users/controllers/CreateUserController';
import { GetUsersController } from '../../../modules/Users/controllers/GetUsersController';
import authMiddleware from '../middlewares/authMiddleware';

export const usersRoutes = Router();

const createUserController = new CreateUserController();
const getUsersController = new GetUsersController();

usersRoutes.post('/', createUserController.handle);
usersRoutes.get('/', authMiddleware, getUsersController.handle);
