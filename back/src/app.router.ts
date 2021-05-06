import express from 'express';
import './common/models.relations';
import { bookRouter } from './book/book.router';
import { authRouter } from './auth/auth.router';
import { routeNotFoundMiddleware } from './common/route-not-found.middleware';
import { orderRouter } from './order/order.router';
import { userRouter } from './user/user.router';

export const router = express.Router();
router.use('/livre', bookRouter);
router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/commande', orderRouter);
router.use(routeNotFoundMiddleware);
