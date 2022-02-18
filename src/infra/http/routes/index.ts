import { Router } from 'express';

import { usersRoutes } from './usersRoutes';

export const router = Router();

router.use('/users', usersRoutes);
