import { DataTypes, Model } from 'sequelize';
import { IDto, IModel } from '../common/abstract.model';
import { sequelize } from '../common/database.config';
import { IUser } from '../user/user.model';

export interface IBook extends IModel {
    title: string;
    author: string;
    editor: string;
    summary: string;
    genres: string;
    issueDate: string;
    pageNumber: number;
    price: number;
    cover: string
    isbn: string;
    note: number;
    evaluation: string;
    users?: IUser[];
}

export interface IBookDto extends IDto {
    titre: string;
    auteur: string;
    editeur: string;
    description: string;
    genre: string;
    date_de_publication: string;
    nb_de_page: number;
    prix: number;
    couverture: string;
    isbn: string;
    note: number;
    evaluation: string;
    users?: IUser[];
}

const attributes = {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    editor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    summary: {
        type: DataTypes.STRING,
        allowNull: true
    },
    genres: {
        type: DataTypes.STRING,
        allowNull: true
    },
    issueDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pageNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    cover: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isbn: {
        type: DataTypes.STRING,
        allowNull: false
    },
    note: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    evaluation: {
        type: DataTypes.STRING,
        allowNull: false
    }
};

const options = {
    sequelize,
    modelName: 'books'
};

export class BookModel extends Model implements IBook {
    id: number;
    title: string;
    author: string;
    editor: string;
    summary: string;
    genres: string;
    issueDate: string;
    pageNumber: number;
    price: number;
    cover: string;
    isbn: string;
    note: number;
    evaluation: string;
    users?: IUser[];
}

BookModel.init(attributes, options);
