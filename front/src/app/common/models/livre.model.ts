import { genre } from '../enums/genre.enum';

export class Livre {
  public id!: number | null;
  public titre!: string;
  public couverture!: string;
  public auteur!: string;
  public editeur!: string;
  public genre!: genre;
  public description!: string;
  public date_de_publication!: string;
  public nb_de_page!: number;
  public prix!: number;
  public isbn!: string;
  public note!: number;
  public evaluation!: string;
  public nom_vendeur!: string;
  public vendeur!: number | null;
}
