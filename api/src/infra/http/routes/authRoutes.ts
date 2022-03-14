import { Router } from 'express';
import { AuthController } from '../../../modules/Auth/controllers/AuthController';

export const authRoutes = Router();

const authController = new AuthController();

authRoutes.post('/', authController.handle);
