import { AbstractMapper } from "../common/abstract.mapper";
import { IUser, IUserDto, UserRole } from "./user.model";

export class UserMapper extends AbstractMapper<IUser, IUserDto> {

    modelToDto(model: IUser): Promise<IUserDto> {
        return {
            id: model.id,
            email: model.email,
            password: model.password,
            nom: model.firstName,
            prenom: model.lastName,
            telephone: model.phone,
            role: model.role,
            livres: model.books
        } as unknown as Promise<IUserDto>
    }

    modelToMe(model: IUser): Promise<IUserDto> {
        return {
            nom: model.firstName,
            prenom: model.lastName,
            role: model.role,
            livres: model.books
        } as unknown as Promise<IUserDto>
    }

    dtoToModel(dto: IUserDto): Promise<IUser> {
        return new Promise((resolve, reject) => {
            if(!dto){
                reject()
            }

            resolve({
                id: dto.id,
                email: dto.email,
                password: dto.password,
                firstName: dto.prenom,
                lastName: dto.nom,
                phone: dto.telephone,
                role: dto.role || "USER" as UserRole,
                books: dto.livres
            })
        })
    }
}

export const userMapper = new UserMapper();