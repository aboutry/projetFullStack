import { Me } from './../../common/models/me.model';
import { Token } from './../../common/models/token.model';
import { AuthResource } from './auth.resource';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthTokenService } from './auth-token.service';

@Injectable()
export class MeService {
  private me$ = new BehaviorSubject<Me | null>(null);

  constructor(
    private authTokenService: AuthTokenService,
    private authResource: AuthResource
  ) {
    if (this.authTokenService.getToken()) {
      this.setMe();
    }
  }

  login(tokenDto: Token): void {
    this.authTokenService.setToken(tokenDto.token);
    this.setMe();
  }

  private setMe(): void {
    this.authResource.me().subscribe((me) => {
      this.me$.next(me);
    });
  }

  getMe(): Observable<Me | null> {
    return this.me$.asObservable();
  }

  logout(): void {
    this.authTokenService.clearToken();
    this.me$.next(null);
  }
}
