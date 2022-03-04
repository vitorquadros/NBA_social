import { Router } from 'express';
import { CreateLikeController } from '../../../modules/Posts/controllers/CreateLikeController';
import { CreatePostController } from '../../../modules/Posts/controllers/CreatePostController';
import { GetPostsController } from '../../../modules/Posts/controllers/GetPostsController';
import authMiddleware from '../middlewares/authMiddleware';

export const postsRoutes = Router();

const createPostController = new CreatePostController();
const getPostsController = new GetPostsController();
const createLikeController = new CreateLikeController();

postsRoutes.post('/', authMiddleware, createPostController.handle);
postsRoutes.get('/', getPostsController.handle);
postsRoutes.post('/:postId/like', authMiddleware, createLikeController.handle);
