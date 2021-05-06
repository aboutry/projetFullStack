import { AbstractMapper } from '../common/abstract.mapper';
import { IUser } from '../user/user.model';
import { IAuthMeDto } from './auth.model';

class AuthMeMapper extends AbstractMapper<IUser, IAuthMeDto> {
    dtoToModel(dto: IAuthMeDto): Promise<IUser> {
        return undefined;
    }

    modelToDto(model: IUser): Promise<IAuthMeDto> {
        return new Promise((resolve, reject) => {
            if(!model){
                reject()
            }
            resolve({
                id: model.id,
                email: model.email,
                role: model.role,
                firstName: model.firstName,
                lastName: model.lastName
            })
        })
    }
}

export const authMeMapper = new AuthMeMapper();
