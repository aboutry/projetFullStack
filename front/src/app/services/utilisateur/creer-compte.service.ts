import { environment } from './../../../environments/environment';
import { Utilisateur } from './../../common/models/utilisateur.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreerCompteService {
  private accountUrl = environment.userUrl;

  constructor(private http: HttpClient) {}

  createAccount(user: Utilisateur) {
    this.http.post(this.accountUrl, user).subscribe();
  }
}
