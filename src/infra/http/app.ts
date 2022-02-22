import 'reflect-metadata';
import '../../shared/container';
import express, { Application } from 'express';
import '../database';
import { router } from './routes';

export const app: Application = express();

app.use(express.json());
app.use(router);
