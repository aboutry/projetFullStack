import { Includeable } from 'sequelize/types';
import { ErrorType } from '../common/error/error.model';
import { generateToken } from '../common/token.service';
import { UserModel } from '../user/user.model';
import { userRepository } from '../user/user.repository';
import { authMeMapper } from './auth.mapper';
import { IAuthCredentials, IAuthMeDto, IAuthToken } from './auth.model';

class AuthService {
    login(credentials: IAuthCredentials): Promise<IAuthToken> {
        return userRepository.findByEmailAndPassword(credentials.email, credentials.password)
            .then(user => generateToken({
                id: user.id,
                email: user.email,
                role: user.role
            }))
            .then(token => ({ token }))
            .catch(error => {
                return Promise.reject({ type: ErrorType.invalidCredentials });
            })
    }

    getUser(userId: number): Promise<IAuthMeDto> {
        return userRepository.get(userId)
          .then(model => authMeMapper.modelToDto(model))
    }

    checkUserRessource(userId: number, include: Includeable[]): Promise<void> {
        return new Promise((resolve, reject) => {
            UserModel.findByPk(userId, {
                include: include,
                rejectOnEmpty: true
            })
            .then((userFound) => {
                console.log(userFound);
                resolve();
            })
            .catch(() => reject())
        })
      }
}

export const authService = new AuthService();
