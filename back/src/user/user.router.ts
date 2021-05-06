import { NextFunction, Request, Response, Router } from 'express';
import { authenticationMiddleware } from "../common/authentication.middleware";
import { authorizationMiddleware } from "../common/authorization.middleware";
import { routeParamIdMiddleware } from "../common/route-param-id.middleware";
import { userController } from "./user.controller";
import { UserRole } from "./user.model";

export const userRouter = Router();

userRouter.get('/', (req, res, next) => userController.findAll(req, res, next));

userRouter.get('/:id', routeParamIdMiddleware, 
(req: Request, res: Response, next: NextFunction) => userController.get(req, res, next));

userRouter.post('/',
(req: Request, res: Response, next: NextFunction) => userController.create(req, res, next));

userRouter.put('/:id',
authenticationMiddleware,
routeParamIdMiddleware,
(req: Request, res: Response, next: NextFunction) => userController.update(req, res, next));

userRouter.delete('/:id',
authenticationMiddleware,
authorizationMiddleware(UserRole.admin),
routeParamIdMiddleware,
(req: Request, res: Response, next: NextFunction) => userController.remove(req, res, next));

