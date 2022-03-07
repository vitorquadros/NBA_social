import { Router } from 'express';

import { authRoutes } from './authRoutes';
import { usersRoutes } from './usersRoutes';
import { postsRoutes } from './postsRoutes';

export const router = Router();

router.use('/users', usersRoutes);
router.use('/auth', authRoutes);
router.use('/posts', postsRoutes);
