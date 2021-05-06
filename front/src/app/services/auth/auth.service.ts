import { Auth } from './../../common/models/auth.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MeService } from './me.service';
import { AuthResource } from './auth.resource';

@Injectable()
export class AuthService {
  constructor(
    private authResource: AuthResource,
    private meService: MeService,
    private router: Router
  ) {}

  login(credentials: Auth): Observable<any> {
    return this.authResource.login(credentials).pipe(
      tap((token) => this.meService.login(token)),
      tap(() => this.router.navigate(['']))
    );
  }
}
