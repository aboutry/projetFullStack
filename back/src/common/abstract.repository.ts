import { Includeable, Model, ModelStatic } from 'sequelize';
import { authService } from '../auth/auth.service';
import { IModel } from './abstract.model';
import { PrimaryKeyError } from './error/repository-error.model';

export abstract class AbstractRepository<M extends IModel> {

  protected abstract modelClass: ModelStatic<Model<M, M>> & typeof Model;

  findAll(include?: Includeable[]): Promise<M[]> {
    if (include) {
      return this.modelClass.findAll({
        include: include
      }) as unknown as Promise<M[]>
    }
    else {
      return this.modelClass.findAll() as unknown as Promise<M[]>;
    }
  }

  get(id: number, include?: Includeable[]): Promise<M> {
    if (include) {
      return this.modelClass.findByPk(id, {
        include: include,
        rejectOnEmpty: true
      }) as unknown as Promise<M>
    }
    else {
      return this.modelClass.findByPk(id, { rejectOnEmpty: true }) as unknown as Promise<M>;
    }
  }

  create(model: M, include?: Includeable[]): Promise<M> {
    if (include) {
      return this.modelClass.create(model, {
        include: include
      }) as unknown as Promise<M>;
    }
    else {
      return this.modelClass.create(model) as unknown as Promise<M>;
    }
  }

  patch(id: number, userId: number, model: M): Promise<M> {
    const include = [{
      model: this.modelClass,
      as: this.modelClass.getTableName.toString(),
      where: {
        userId: userId
      }
    }];

    return new Promise((resolve, reject) => {
      authService.checkUserRessource(userId, include)
      .then(() => {
        this.modelClass.update(model, {
          where: {
            id: id
          }
        })
        .then(updatedRow => resolve(updatedRow as unknown as Promise<M>))
      })
      .catch(() => reject())
    })
  }

  update(id: number, model: M): Promise<M> {
    return this.modelClass.update(model, {
      where: {
        id: id
      }
    }) as unknown as Promise<M>
  }

  remove(id: number): Promise<void> {
    return this.modelClass.destroy({
      where: {
        id: id
      }
    })
    .then((affectedRowsCount) => {
      if (!affectedRowsCount) {
        throw new PrimaryKeyError();
      }
    });
  }
}
