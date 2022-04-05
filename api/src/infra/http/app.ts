import 'reflect-metadata';
import cors from 'cors';
import '../../shared/container';
import express, { Application, NextFunction, Request, Response } from 'express';
import '../database';
import { router } from './routes';
import path from 'path';
import 'dotenv/config';

export const app: Application = express();

app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', '..', '..', 'public', 'uploads'))
);
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  app.use(cors);
  next();
});

app.use(express.json());
app.use(router);
