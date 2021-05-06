import { environment } from './../../../environments/environment';
import { Me } from './../../common/models/me.model';
import { Token } from './../../common/models/token.model';
import { Auth } from './../../common/models/auth.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthResource {
  private url = environment.authUrl;

  constructor(private http: HttpClient) {}

  login(credentials: Auth): Observable<Token> {
    return this.http.post<Token>(`${this.url}/login`, credentials);
  }

  me(): Observable<Me> {
    return this.http.get<Me>(`${this.url}/me`);
  }
}
