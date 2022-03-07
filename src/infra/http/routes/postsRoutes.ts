import { Router } from 'express';
import { LikesController } from '../../../modules/Posts/controllers/LikesController';

import authMiddleware from '../middlewares/authMiddleware';
import { PostsController } from '../../../modules/Posts/controllers/PostsController';

export const postsRoutes = Router();

const postsController = new PostsController();
const likesController = new LikesController();

postsRoutes.post('/', authMiddleware, postsController.store);
postsRoutes.get('/', postsController.index);
postsRoutes.post('/:postId/like', authMiddleware, likesController.store);
