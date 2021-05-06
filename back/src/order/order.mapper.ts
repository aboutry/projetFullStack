import { bookService } from "../book/book.service";
import { IOrder, IOrderDto } from "./order.model";

export class OrderMapper {

    modelToDto(model: IOrder): Promise<IOrderDto> {
        return new Promise((resolve, reject) => {
            if (!model){
                reject();
            }
            bookService.get(model.bookId)
                .then((bookFound) => {
                    let orderDto: IOrderDto = {article: [], prix: 0, date_de_commande: new Date(new Date())};
                    orderDto.article.push({livre: model.bookId, quantite: model.quantity});
                    orderDto.prix = bookFound.prix * model.quantity;
                    orderDto.date_de_commande = model.createdAt;
                    resolve(orderDto);
                })
        })
    }

    dtoToModel(dto: IOrderDto, userId: number): IOrder[] {
        const orders = [];
        dto.article.forEach((article) => {
            orders.push({
                bookId: article.livre,
                quantity: article.quantite,
                userId: userId,
            })
        });
        console.log(orders);
        return orders as IOrder[];
    }

    modelsToDtos(models: IOrder[]): Promise<IOrderDto[]> {
        return Promise.all(models.map(model => this.modelToDto(model)));
    }
}

export const orderMapper = new OrderMapper()