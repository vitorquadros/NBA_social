import { Router } from 'express';
import { CreateLikeController } from '../../../modules/Posts/controllers/CreateLikeController';
import { CreatePostController } from '../../../modules/Posts/controllers/CreatePostController';
import authMiddleware from '../middlewares/authMiddleware';

export const postsRoutes = Router();

const createPostController = new CreatePostController();
const createLikeController = new CreateLikeController();

postsRoutes.post('/', authMiddleware, createPostController.handle);
postsRoutes.post('/:postId/like', authMiddleware, createLikeController.handle);
