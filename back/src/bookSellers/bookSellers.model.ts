import { DataTypes, Model } from "sequelize";
import { BookModel } from "../book/book.model";
import { IModel } from "../common/abstract.model";
import { sequelize } from '../common/database.config';
import { UserModel } from "../user/user.model";

export interface ISellers extends IModel {
    sellerId: number;
    bookId: number;
    books?: BookModel;
    users?: UserModel;
}

const attributes = {
    sellerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bookId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
};

const options = {
    sequelize,
    modelName: 'booksellers'
};

export class SellersModel extends Model implements ISellers {
    sellerId: number;
    bookId: number;
    books?: BookModel;
    users?: UserModel;
}

SellersModel.init(attributes, options);