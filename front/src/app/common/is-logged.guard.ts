import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MeService } from '../services/auth/me.service';

@Injectable({ providedIn: 'root' })
export class IsLoggedGuard implements CanActivate {
  constructor(private meService: MeService, private snackBar: MatSnackBar) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.meService.getMe().pipe(
      map((auth) => auth?.role === 'ADMIN'),
      tap((isAdmin) => {
        if (!isAdmin) {
          this.snackBar.open(`Vous n'avez pas accès à cette partie`, 'x');
        }
      })
    );
  }
}
