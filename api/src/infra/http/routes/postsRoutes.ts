import { Router } from 'express';
import { LikesController } from '../../../modules/Posts/controllers/LikesController';
import authMiddleware from '../middlewares/authMiddleware';
import { PostsController } from '../../../modules/Posts/controllers/PostsController';
import { CommentsController } from '../../../modules/Posts/controllers/CommentsController';

export const postsRoutes = Router();

const postsController = new PostsController();
const likesController = new LikesController();
const commentsController = new CommentsController();

// Posts
postsRoutes.post('/', authMiddleware, postsController.store);
postsRoutes.get('/', postsController.index);
postsRoutes.get('/:userId', postsController.indexByUser);

// Likes
postsRoutes.post('/:postId/like', authMiddleware, likesController.store);
postsRoutes.get('/:postId/like', authMiddleware, likesController.verify);

// Comments
postsRoutes.post('/:postId/comments', authMiddleware, commentsController.store);
postsRoutes.get('/:postId/comments', commentsController.index);
