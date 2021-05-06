import { environment } from './../../../environments/environment';
import { genre } from './../../common/enums/genre.enum';
import { Livre } from './../../common/models/livre.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  private livreUrl = environment.livreUrl;
  private livres$ = new BehaviorSubject<Livre[] | null>(null);

  constructor(private http: HttpClient) {}

  getListeLivre(): Observable<Livre[] | null> {
    return this.livres$.asObservable();
  }

  getLivres(): void {
    this.http
      .get<Livre[]>(`${this.livreUrl}`)
      .subscribe((livres: Livre[]) => this.livres$.next(livres));
  }

  getLivre(index: number): Observable<Livre> {
    return this.http.get<Livre>(`${this.livreUrl}` + '/' + index);
  }

  removeLivre(index: number) {
    this.http
      .delete(this.livreUrl + '/' + index)
      .subscribe(() => this.getLivres());
  }

  editCharacterWithPatch(livre: Livre) {
    // vendeur
    this.http
      .patch(this.livreUrl + '/' + livre.id, livre)
      .subscribe(() => this.getLivres());
  }

  editCharacterWithPut(livre: Livre) {
    // admin
    this.http
      .put(this.livreUrl + '/' + livre.id, livre)
      .subscribe(() => this.getLivres());
  }

  createLivre(livre: Livre) {
    this.http.post(this.livreUrl, livre).subscribe(() => this.getLivres());
  }
}
