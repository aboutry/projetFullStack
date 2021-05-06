
import { Includeable } from 'sequelize';
import { PrimaryKeyError } from '../common/error/repository-error.model';
import { IUser, UserModel } from './user.model';

class UserRepository {
  protected modelClass = UserModel;

  findByEmailAndPassword(email: string, password: string): Promise<IUser> {
    return this.modelClass.findOne({
      where: {
        email: email,
        password: password
      },
      rejectOnEmpty: true
    });
  }

  findAll(include?: Includeable[]): Promise<IUser[]> {
    if (include) {
      return this.modelClass.findAll({
        include: include
      }) as unknown as Promise<IUser[]>
    }
    else {
      return this.modelClass.findAll() as unknown as Promise<IUser[]>;
    }
  }

  get(id: number, include?: Includeable[]): Promise<IUser> {
    if (include) {
      return this.modelClass.findByPk(id, {
        include: include,
        rejectOnEmpty: true
      }) as unknown as Promise<IUser>
    }
    else {
      return this.modelClass.findByPk(id, { rejectOnEmpty: true }) as unknown as Promise<IUser>;
    }
  }

  create(model: IUser, include?: Includeable[]): Promise<IUser> {
    if (include) {
      return this.modelClass.create(model, {
        include: include
      }) as unknown as Promise<IUser>;
    }
    else {
      return this.modelClass.create(model) as unknown as Promise<IUser>;
    }
  }

  update(id: number, model: IUser): Promise<IUser> {
    return this.modelClass.update(model, {
      where: {
        id: id
      }
    }) as unknown as Promise<IUser>
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

export const userRepository = new UserRepository();