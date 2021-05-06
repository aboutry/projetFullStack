import { DataTypes, Model } from 'sequelize';
import { IDto, IModel } from '../common/abstract.model';
import { sequelize } from '../common/database.config';

export interface IOrder extends IModel {
    quantity: number;
    bookId: number;
    userId?: number;
    createdAt?: Date;
}

export interface IOrderDto extends IDto {
    article: IArticle[];
    prix: number;
    date_de_commande: Date;
}

export interface IArticle extends IDto {
    livre: number;
    quantite: number;
}

const attributes = {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
};

const options = {
    sequelize,
    modelName: 'orders'
};

export class OrderModel extends Model implements IOrder {
    quantity: number;
    bookId: number;
    userId: number;
    createdAt: Date;
}

OrderModel.init(attributes, options);