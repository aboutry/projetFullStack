import express from 'express';
import cors from 'cors';
import { router } from './app.router';
import { errorMiddleware } from './common/error/error.middleware';
import { logMiddleware } from './common/log.middleware';

export const app = express();

app.use(cors());
app.use(logMiddleware);
app.use(express.json());
app.use(router);
app.use(errorMiddleware);
