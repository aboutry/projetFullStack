import { Livre } from './../../common/models/livre.model';
import { Article } from './../../common/models/article.model';
import { Caddy } from '../../common/models/caddy.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaddyService {
  private caddyKey = 'caddy';

  setCaddy(caddy: Caddy): void {
    localStorage.setItem(this.caddyKey, JSON.stringify(caddy));
  }

  getCaddy(): Caddy | null {
    const caddy = localStorage.getItem(this.caddyKey);
    if (caddy) {
      return JSON.parse(localStorage.getItem(this.caddyKey) || '{}');
    } else {
      return null;
    }
  }

  clearCaddy(): void {
    localStorage.removeItem(this.caddyKey);
  }

  addArticleToCaddy(article: Article): void {
    var caddy: Caddy = this.getCaddy() || new Caddy();
    caddy.article.push(article);
    caddy.prix += article.livre.prix * article.quantite;
    this.setCaddy(caddy);
  }

  addLivreToCaddy(livre: Livre): void {
    const article: Article = {
      livre,
      quantite: 1
    };
    this.addArticleToCaddy(article);
  }
}
