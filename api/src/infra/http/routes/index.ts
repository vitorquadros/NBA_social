import { Router } from 'express';

import { authRoutes } from './authRoutes';
import { usersRoutes } from './usersRoutes';
import { postsRoutes } from './postsRoutes';
import { uploadRoutes } from './uploadRoutes';

export const router = Router();

router.use('/users', usersRoutes);
router.use('/auth', authRoutes);
router.use('/posts', postsRoutes);
router.use('/uploads', uploadRoutes);
