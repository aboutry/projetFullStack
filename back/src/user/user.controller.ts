import { NextFunction, Request, Response } from "express";
import { AuthenticatedRequest } from "../common/authentication.middleware";
import { userService } from "./user.service";

class UserController {

    findAll(request: Request, response: Response, next: NextFunction): void {
        userService.findAll()
            .then((dtos) => {
                response.json(dtos)
            })
            .catch(next);
    }

    get(request: Request, response: Response, next: NextFunction): void {
        const id = parseInt(request.params.id);
        userService.getMe(id)
            .then(dto => {
                response.json(dto);
            })
            .catch(next);
    }

    create(request: Request, response: Response, next: NextFunction): void {
        userService.create(request.body)
            .then(item => {
                response.status(201);
                response.json(item);
            })
            .catch(next);
    }

    update(request: Request, response: Response, next: NextFunction): void {
        const id = parseInt(request.params.id);
        userService.update(id, request.body)
            .then(item => response.json(item))
            .catch(next);
    }

    patch(request: AuthenticatedRequest, response: Response, next: NextFunction): void {
        const id = parseInt(request.params.id);
        const userId = request.userToken.id
        userService.patch(id, userId, request.body)
            .then(item => response.json(item))
            .catch(next);
    }

    remove(request: Request, response: Response, next: NextFunction): void {
        const id = parseInt(request.params.id);
        userService.remove(id)
            .then(() => {
                response.status(204);
                response.json();
            })
            .catch(next);
    }
}

export const userController = new UserController();