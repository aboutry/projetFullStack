import { NextFunction, Request, Response } from 'express';
import { AuthenticatedRequest } from '../common/authentication.middleware';
import { orderService } from './order.service';

class OrderController {

  findAll(request: AuthenticatedRequest, response: Response, next: NextFunction): void {
    orderService.findAll(request.userToken.id)
      .then((dtos) => {
        response.json(dtos)
      })
      .catch(next);
  }

  get(request: AuthenticatedRequest, response: Response, next: NextFunction): void {
    orderService.get(request.userToken.id)
      .then(dto => {
        response.json(dto);
      })
      .catch(next);
  }

  create(request: AuthenticatedRequest, response: Response, next: NextFunction): void {
    orderService.create(request.body, request.userToken.id)
      .then(() => {
        response.status(201);
        response.json('Commandes créées');
      })
      .catch((err) => {
        console.log('erreur : ' + err);
        next()
      });
  }
}

export const orderController = new OrderController();
