import { role } from '../enums/role.enum';

export class Me {
  public nom!: string;
  public prenom!: string;
  public role!: role | string;
}
