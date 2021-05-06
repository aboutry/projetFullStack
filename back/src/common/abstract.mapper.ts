import { IDto, IModel } from './abstract.model';

export abstract class AbstractMapper<M extends IModel, D extends IDto> {

  abstract modelToDto(model: M): Promise<D>;
  abstract dtoToModel(dto: D): Promise<M>;

  modelsToDtos(models: M[]): Promise<D[]> {
    return Promise.all(models.map(model => this.modelToDto(model)));
  }

  dtosToModels(dtos: D[]): Promise<M[]> {
    return Promise.all(dtos.map(dto => this.dtoToModel(dto)));
  }
}