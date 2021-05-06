import { BookModel } from "../book/book.model";
import { SellersModel } from "../bookSellers/bookSellers.model";
import { OrderModel } from "../order/order.model";
import { UserModel } from "../user/user.model";

// Relations modèle User
UserModel.belongsToMany(BookModel, {
    through: SellersModel,
    foreignKey: 'sellerId',
    otherKey: 'bookId',
    as: "books",
    onDelete:'CASCADE'
});

UserModel.hasMany(OrderModel, {
    sourceKey: 'id',
    foreignKey: 'userId'
});

// Relations modèle Book
BookModel.belongsToMany(UserModel, {
    through: SellersModel,
    foreignKey: 'bookId',
    otherKey: 'sellerId',
    as: 'users',
    onDelete: 'CASCADE'
});


BookModel.hasMany(OrderModel, {
    sourceKey: 'id',
    foreignKey: 'bookId'
});

// Relations modèle Order
OrderModel.belongsTo(UserModel);

OrderModel.belongsTo(BookModel);
