import { Router } from 'express';
import { RegisterController } from '../../../modules/Register/controllers/RegisterController';
// import { CreateUserController } from '../../../modules/Users/controllers/CreateUserController';
// import { GetUsersController } from '../../../modules/Users/controllers/GetUsersController';
// import authMiddleware from '../middlewares/authMiddleware';

export const usersRoutes = Router();

// const createUserController = new CreateUserController();
// const getUsersController = new GetUsersController();
const registerController = new RegisterController();

// usersRoutes.post('/', createUserController.handle);
// usersRoutes.get('/', authMiddleware, getUsersController.handle);
usersRoutes.post('/', registerController.store);
usersRoutes.get('/:key', registerController.show);
