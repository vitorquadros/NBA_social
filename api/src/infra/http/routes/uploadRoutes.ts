import { Request, Response, Router } from 'express';
import multer from 'multer';
import { multerConfig } from '../../../config/multer';

export const uploadRoutes = Router();

uploadRoutes.post(
  '/',
  multer(multerConfig).single('image'),
  (req: Request, res: Response) => {
    console.log(req.file);
    return res.json({ status: 'ok', filename: req.file.filename });
  }
);
