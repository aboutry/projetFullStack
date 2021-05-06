import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

enum ErrorType {
  resourceIdFormat = 'RESOURCE_ID_FORMAT',
  resourceIdNotFound = 'RESOURCE_ID_NOT_FOUND',
  resourceTypeNotFound = 'RESOURCE_TYPE_NOT_FOUND',
  unhandledError = 'UNHANDLED_ERROR',
  invalidCredentials = 'INVALID_CREDENTIALS',
  missingToken = 'MISSING_TOKEN',
  invalidToken = 'INVALID_TOKEN',
  missingRole = 'MISSING_ROLE'
}

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private snackbarService: MatSnackBar) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        this.snackbarService.open(this.getMessage(error.error?.type), 'Close', {
          duration: 5000
        });
        return throwError(error);
      })
    );
  }

  private getMessage(errorType: ErrorType): string {
    switch (errorType) {
      case ErrorType.missingRole:
        return `Vous n'avez pas les rôles suffisant pour accéder à cette donnée`;
      case ErrorType.missingToken:
        return `Vous devez vous authentifier pour accéder à cette donnée`;
      case ErrorType.invalidToken:
        return `Vous devez vous réauthentifier pour accéder à cette ressource`;
      case ErrorType.resourceTypeNotFound:
      case ErrorType.resourceIdNotFound:
      case ErrorType.resourceIdFormat:
      case ErrorType.invalidCredentials:
      case ErrorType.unhandledError:
      default:
        return `Une erreur est survenue, veuillez retenter plus tard`;
    }
  }
}
