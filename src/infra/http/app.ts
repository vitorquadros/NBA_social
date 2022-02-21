import express, { Application } from 'express';
import 'reflect-metadata';
import { router } from './routes';

export const app: Application = express();

app.use(express.json());
app.use(router);
