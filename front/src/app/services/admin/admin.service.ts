import { environment } from './../../../environments/environment';
import { Utilisateur } from './../../common/models/utilisateur.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Livre } from 'src/app/common/models/livre.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private userUrl = environment.userUrl;
  private users$ = new BehaviorSubject<Utilisateur[] | null>(null);
  private livreUrl = environment.livreUrl;
  private livres$ = new BehaviorSubject<Livre[] | null>(null);
  constructor(private http: HttpClient) {}

  getListeUser(): Observable<Utilisateur[] | null> {
    return this.users$.asObservable();
  }

  getUsers(): void {
    this.http
      .get<Utilisateur[]>(`${this.userUrl}`)
      .subscribe((users: Utilisateur[]) => this.users$.next(users));
  }

  removeUser(index: Number): void {
    this.http
      .delete(`${this.userUrl}` + '/' + index)
      .subscribe(() => this.getUsers());
  }

  getListeLivre(): Observable<Livre[] | null> {
    return this.livres$.asObservable();
  }

  getLivres(): void {
    this.http
      .get<Livre[]>(`${this.livreUrl}`)
      .subscribe((livres: Livre[]) => this.livres$.next(livres));
  }

  removeLivre(index: Number): void {
    this.http
      .delete(`${this.livreUrl}` + '/' + index)
      .subscribe(() => this.getLivres());
  }

  editUser(user: Utilisateur) {
    this.http
      .put(this.userUrl + '/' + user.id, user)
      .subscribe(() => this.getUsers());
  }
}
