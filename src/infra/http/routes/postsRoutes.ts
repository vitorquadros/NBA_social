import { Router } from 'express';
import { CreatePostController } from '../../../modules/Posts/controllers/CreatePostController';
import authMiddleware from '../middlewares/authMiddleware';

export const postsRoutes = Router();

const createPostController = new CreatePostController();

postsRoutes.post('/', authMiddleware, createPostController.handle);
