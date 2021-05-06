import { Article } from './article.model';

export class Commande {
  public date_de_commande!: string;
  public article!: Article[];
  public prix!: number;
}
