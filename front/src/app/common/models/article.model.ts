import { Livre } from './livre.model';
import { Attribute } from '@angular/core';

export class Article {
  public livre!: Livre;
  public quantite!: number;
}

export class ArticleDto {
  public livre!: number | null;
  public quantite!: number;
}

export function articleToDto(article: Article): ArticleDto {
  return {
    livre: article.livre.id,
    quantite: article.quantite
  };
}
