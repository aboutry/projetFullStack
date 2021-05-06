import { DataTypes, Model } from 'sequelize';
import { BookModel, IBook } from '../book/book.model';
import { IDto, IModel } from '../common/abstract.model';
import { sequelize } from '../common/database.config';

export enum UserRole {
  user = 'USER',
  seller = 'SELLER',
  admin = 'ADMIN'
}

export interface IUser extends IModel {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: UserRole;
  books: BookModel[];
}

export interface IUserDto extends IDto {
  email: string;
  password: string;
  prenom: string;
  nom: string;
  telephone: string;
  role: UserRole;
  livres: BookModel[];
}

export interface UserLight extends IModel {
  firstName: string
  lastName: string;
}

export interface IMe {
  prenom: string;
  nom: string;
  role: UserRole;
}

const attributes = {
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  }
};

const options = {
  sequelize,
  modelName: 'users'
};

export class UserModel extends Model implements IUser {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: UserRole;
  books: BookModel[];
  addBook?(book: IBook): Promise<any>;
}

UserModel.init(attributes, options);
