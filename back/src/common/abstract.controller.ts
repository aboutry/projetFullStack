import { NextFunction, Request, Response } from 'express';
import { userService } from '../user/user.service';
import { IDto, IModel } from './abstract.model';
import { AbstractService } from './abstract.service';
import { AuthenticatedRequest } from './authentication.middleware';

export abstract class AbstractController<M extends IModel, D extends IDto> {

  protected abstract get service(): AbstractService<M, D>;

  findAll(request: Request, response: Response, next: NextFunction): void {
    this.service.findAll()
      .then((dtos) => {
        response.json(dtos)
      })
      .catch(next);
  }

  get(request: Request, response: Response, next: NextFunction): void {
    const id = parseInt(request.params.id);
    this.service.get(id)
      .then(dto => {
        response.json(dto);
      })
      .catch(next);
  }

  create(request: AuthenticatedRequest, response: Response, next: NextFunction): void {
    this.service.create(request.body, request.userToken.id)
      .then(item => {
        response.status(201);
        response.json(item);
      })
      .catch((err) => {
        console.log(err);
        next()
      });
  }

  update(request: Request, response: Response, next: NextFunction): void {
    const id = parseInt(request.params.id);
    this.service.update(id, request.body)
      .then(item => response.json(item))
      .catch(next);
  }

  patch(request: AuthenticatedRequest, response: Response, next: NextFunction): void {
    const id = parseInt(request.params.id);
    const userId = request.userToken.id
    this.service.patch(id, userId, request.body)
      .then(item => response.json(item))
      .catch(next);
  }


  remove(request: Request, response: Response, next: NextFunction): void {
    const id = parseInt(request.params.id);
    this.service.remove(id)
      .then(() => {
        response.status(204);
        response.json();
      })
      .catch(next);
  }
}
