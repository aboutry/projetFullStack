import { BookModel } from "../book/book.model";
import { itemErrorHandler } from "../common/error/error.mapper";
import { UserModel } from "../user/user.model";
import { orderMapper } from "./order.mapper";
import { IOrder, IOrderDto } from "./order.model";
import { orderRepository } from "./order.repository";

class OrderService {

    include = [
        {
            model: UserModel,
            as: 'users',
            attributes: ['id', 'firstName', 'lastName']
        },
        {
            model: BookModel,
            as: 'books'
        },
    ]

    findAll(userId: number): Promise<IOrderDto[]> {
        return orderRepository.findAll(userId)
          .then(models => orderMapper.modelsToDtos(models));
    }

    get(userId: number): Promise<IOrderDto> {
    return orderRepository.get(userId, this.include)
        .then((model) => {
            return orderMapper.modelToDto(model)
        })
        .catch(itemErrorHandler(userId));
    }

    create(dto: IOrderDto, userId: number): Promise<IOrder[]> {
        return new Promise((resolve, reject) => {
            console.log(dto);
            const model = orderMapper.dtoToModel(dto, userId)
            orderRepository.create(model)
                .then(newRow => resolve(newRow))
        })
    }
}

export const orderService = new OrderService();