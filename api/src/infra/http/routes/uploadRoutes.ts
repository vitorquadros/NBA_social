import { Request, Response, Router } from 'express';
import multer from 'multer';
import { multerConfig } from '../../../config/multer';

export const uploadRoutes = Router();

uploadRoutes.post(
  '/avatar',
  multer(multerConfig).single('avatar'),
  (req: Request, res: Response) => {
    console.log(req.file);
    return res.json({ status: 'ok' });
  }
);
