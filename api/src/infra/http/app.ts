import 'reflect-metadata';
import cors from 'cors';
import '../../shared/container';
import express, { Application, NextFunction, Request, Response } from 'express';
import '../database';
import { router } from './routes';

export const app: Application = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  app.use(cors);
  next();
});
app.use(express.json());
app.use(router);
