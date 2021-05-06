import { itemErrorHandler } from "../common/error/error.mapper";
import { userMapper } from "./user.mapper";
import { IUserDto } from "./user.model";
import { userRepository } from "./user.repository";

class UserService  {
    JoinUser = [];

    findAll(): Promise<IUserDto[]> {
        return userRepository.findAll(this.JoinUser)
          .then(models => userMapper.modelsToDtos(models));
    }

    get(id: number): Promise<IUserDto> {
    return userRepository.get(id)
        .then((model) => {
            return userMapper.modelToDto(model)
        })
        .catch(itemErrorHandler(id));
    }

    getMe(id: number): Promise<IUserDto> {
        return userRepository.get(id)
            .then((model) => {
                return userMapper.modelToMe(model)
            })
            .catch(itemErrorHandler(id));
    }

    create(dto: IUserDto): Promise<IUserDto> {
    return userMapper.dtoToModel(dto)
        .then((model) => {
        return userRepository.create(model, this.JoinUser)
            .then((newRow) => userMapper.modelToDto(newRow))
        })
    }

    patch(id: number, userId: number, dto: IUserDto): Promise<IUserDto> {
        return userMapper.dtoToModel(dto)
        .then((model) => {
            return userRepository.update(id, model)
            .then(updatedRow => userMapper.modelToDto(updatedRow))
            .catch(itemErrorHandler(id));
        })
    }

    update(id: number, dto: IUserDto): Promise<IUserDto> {
    return userMapper.dtoToModel(dto)
        .then((model) => {
        return userRepository.update(id, model)
            .then(updatedRow => userMapper.modelToDto(updatedRow))
            .catch(itemErrorHandler(id));
        })
    }

    remove(id: number): Promise<void> {
    return userRepository.remove(id)
        .catch(itemErrorHandler(id));
    }
}

export const userService = new UserService();