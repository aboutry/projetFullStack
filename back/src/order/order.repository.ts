import { rejects } from 'node:assert';
import { Includeable } from 'sequelize';
import { OrderModel, IOrder, IOrderDto } from './order.model';

class OrderRepository {
  protected modelClass = OrderModel;

  findAll(userId: number): Promise<IOrder[]> {
    return this.modelClass.findAll({
      where: {
        userId: userId
      }
    }) as unknown as Promise<IOrder[]>
  }

  get(id: number, include: Includeable[]): Promise<IOrder> {
    return this.modelClass.findByPk(id, {
      include: include,
      rejectOnEmpty: true
    }) as unknown as Promise<IOrder>
  }

  create(model: IOrder[]): Promise<IOrder[]> {
    let rowsCreated = [];

    return new Promise((resolve, reject) => {
      model.forEach((article) => {
        this.modelClass.create(article)
          .then((newOrder) => {
            rowsCreated.push(newOrder)
          })
          .catch(err => console.log(err))
      })
      resolve(rowsCreated)
    })
  }
}

export const orderRepository = new OrderRepository();