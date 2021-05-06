import { role } from '../enums/role.enum';

export class Utilisateur {
  public id!: number | null;
  public nom!: string;
  public prenom!: string;
  public email!: string;
  public telephone!: string;
  public role!: role | null;
  public password!: string | null;
}
