import { Router } from 'express';

import { authRoutes } from './authRoutes';
import { usersRoutes } from './usersRoutes';

export const router = Router();

router.use('/users', usersRoutes);
router.use('/auth', authRoutes);
