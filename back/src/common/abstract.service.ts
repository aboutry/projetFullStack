import { Includeable } from 'sequelize';
import { AbstractMapper } from './abstract.mapper';
import { IDto, IModel } from './abstract.model';
import { AbstractRepository } from './abstract.repository';
import { itemErrorHandler } from './error/error.mapper';

export abstract class AbstractService<M extends IModel, D extends IDto> {

  protected abstract get repository(): AbstractRepository<M>;
  protected abstract get mapper(): AbstractMapper<M, D>;
  protected abstract include : Includeable[];

  userId: any;

  findAll(): Promise<D[]> {
    return this.repository.findAll(this.include)
      .then(models => this.mapper.modelsToDtos(models));
  }

  get(id: number): Promise<D> {
    return this.repository.get(id, this.include)
      .then((model) => {
        return this.mapper.modelToDto(model)
      })
      .catch(itemErrorHandler(id));
  }

  create(dto: D, userId?: number): Promise<D> {
    return this.mapper.dtoToModel(dto)
      .then((model) => {
        return this.repository.create(model, this.include)
          .then((newRow) => this.mapper.modelToDto(newRow))
      })
  }

  patch(id: number, userId: number, dto: D): Promise<D> {
    return this.mapper.dtoToModel(dto)
      .then((model) => {
        return this.repository.patch(id, userId, model)
          .then(updatedRow => this.mapper.modelToDto(updatedRow))
          .catch(itemErrorHandler(id));
      })
  }

  update(id: number, dto: D): Promise<D> {
    return this.mapper.dtoToModel(dto)
      .then((model) => {
        return this.repository.update(id, model)
          .then(updatedRow => this.mapper.modelToDto(updatedRow))
          .catch(itemErrorHandler(id));
      })
  }

  remove(id: number): Promise<void> {
    return this.repository.remove(id)
      .catch(itemErrorHandler(id));
  }
}
