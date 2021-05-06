import { environment } from './../../../environments/environment';
import { Commande } from './../../common/models/commande.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Caddy, caddyToDto } from 'src/app/common/models/caddy.model';
import { Me } from 'src/app/common/models/me.model';
import { Livre } from 'src/app/common/models/livre.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private commandeUrl = environment.commandeUrl;
  private livreUrl = environment.livreUrl;
  private commande$ = new BehaviorSubject<Commande[] | null>(null);

  constructor(private http: HttpClient) {}

  getListeCommandes(): Observable<Commande[] | null> {
    return this.commande$.asObservable();
  }

  getCommande(): void {
    // Vraiment immonde cette fonction mais pas le temps de refacto
    var listeCommande: Commande[] = [];
    this.http.get<any[]>(`${this.commandeUrl}`).subscribe((commandes) => {
      commandes.forEach((commande) => {
        var newCommande: Commande = {
          date_de_commande: '',
          article: [],
          prix: 0
        };
        commande.article.forEach((article: { livre: number }) => {
          this.getLivre(article.livre).subscribe((livre) =>
            newCommande.article.push({ livre: livre, quantite: 1 })
          );
          newCommande.date_de_commande = commande.date_de_commande;
          newCommande.prix = commande.prix;
          listeCommande.push(newCommande);
        });
      });
      this.commande$.next(listeCommande);
    });
  }

  getLivre(index: number): Observable<Livre> {
    return this.http.get<Livre>(`${this.livreUrl}` + '/' + index);
  }

  createCommande(caddy: Caddy): void {
    this.http.post(this.commandeUrl, caddyToDto(caddy)).subscribe();
  }
}
