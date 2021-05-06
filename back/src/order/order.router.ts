import { Router } from 'express';
import { AuthenticatedRequest, authenticationMiddleware } from '../common/authentication.middleware';
import { routeParamIdMiddleware } from '../common/route-param-id.middleware';
import { orderController } from "./order.controller";

export const orderRouter = Router();

orderRouter.get('/',
authenticationMiddleware,
(req: AuthenticatedRequest, res, next) => orderController.findAll(req, res, next));

orderRouter.get('/:id', 
authenticationMiddleware,
(req: AuthenticatedRequest, res, next) => orderController.get(req, res, next));

orderRouter.post('/',
authenticationMiddleware,
(req: AuthenticatedRequest, res, next) => orderController.create(req, res, next));
