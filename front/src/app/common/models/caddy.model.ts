import { Article, ArticleDto, articleToDto } from './article.model';

export class Caddy {
  public article!: Article[];
  public prix!: number;

  constructor() {
    this.article = [];
    this.prix = 0;
  }
}

export class CaddyDto {
  public article!: ArticleDto[];
  public prix!: number;
}

export function caddyToDto(caddy: Caddy): CaddyDto {
  var newArticle: ArticleDto[] = [];
  caddy.article.forEach((article) => {
    newArticle.push(articleToDto(article));
  });
  return {
    article: newArticle,
    prix: caddy.prix
  };
}
