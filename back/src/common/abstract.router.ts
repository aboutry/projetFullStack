import express from 'express';
import { UserRole } from '../user/user.model';
import { AbstractController } from './abstract.controller';
import { IDto, IModel } from './abstract.model';
import { AuthenticatedRequest, authenticationMiddleware } from './authentication.middleware';
import { authorizationMiddleware } from './authorization.middleware';
import { routeParamIdMiddleware } from './route-param-id.middleware';

export abstract class AbstractRouter<M extends IModel, D extends IDto> {
  router = express.Router();

  protected abstract get controller(): AbstractController<M, D>;

  constructor() {
    this.configure();
  }

  protected configure(): void {
    this.router.get('/', (req, res, next) => this.controller.findAll(req, res, next));
    this.router.get('/:id', routeParamIdMiddleware,
    (req: AuthenticatedRequest, res, next) => this.controller.get(req, res, next));

    this.router.post('/',
      authenticationMiddleware,
      (req: AuthenticatedRequest, res, next) => this.controller.create(req, res, next));

    this.router.patch('/:id',
      authenticationMiddleware,
      routeParamIdMiddleware,
      (req: AuthenticatedRequest, res, next) => this.controller.patch(req, res, next));

    this.router.put('/:id',
      authenticationMiddleware,
      authorizationMiddleware(UserRole.admin),
      routeParamIdMiddleware,
      (req: AuthenticatedRequest, res, next) => this.controller.update(req, res, next));

    this.router.delete('/:id',
      authenticationMiddleware,
      authorizationMiddleware(UserRole.admin),
      routeParamIdMiddleware,
      (req: AuthenticatedRequest, res, next) => this.controller.remove(req, res, next));
  }
}
