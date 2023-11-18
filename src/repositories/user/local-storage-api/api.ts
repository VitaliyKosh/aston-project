import { type User } from 'models/user';
import { type UserWithToken, type UserApiRepository } from '../types';
import { LSApiRepository } from 'repositories/local-storage/ls-api';
import { type UserCredential } from 'repositories/local-storage';
import { AppError, BaseErrorCodes } from 'repositories/error';

export class UserLSApiRepository extends LSApiRepository implements UserApiRepository {
    public async signIn (email: string, password: string): Promise<UserWithToken> {
        try {
            const userCredential = this.api.signIn(email, password);
            const user = UserLSApiRepository.userCredentialToModel(userCredential);
            return {
                user,
                token: userCredential.token
            };
        } catch (e) {
            if (e instanceof AppError) {
                throw e;
            } else {
                throw new AppError(BaseErrorCodes.UNKNOWN_ERROR);
            }
        }
    }

    public async signUp (email: string, password: string): Promise<UserWithToken> {
        try {
            const userCredential = this.api.signUp(email, password);
            const user = UserLSApiRepository.userCredentialToModel(userCredential);
            return {
                user,
                token: userCredential.token
            };
        } catch (e) {
            if (e instanceof AppError) {
                throw e;
            } else {
                throw new AppError(BaseErrorCodes.UNKNOWN_ERROR);
            }
        }
    }

    public async signOut (): Promise<void> {
        try {
            this.api.signOut();
        } catch (e) {
            if (e instanceof AppError) {
                throw e;
            } else {
                throw new AppError(BaseErrorCodes.UNKNOWN_ERROR);
            }
        }
    }

    public async validateToken (token: string): Promise<UserWithToken | null> {
        try {
            const userCredential = this.api.validateToken(token);

            if (!userCredential) {
                return null;
            }

            const user = UserLSApiRepository.userCredentialToModel(userCredential);
            return {
                user,
                token: userCredential.token
            };
        } catch (e) {
            if (e instanceof AppError) {
                throw e;
            }
            throw new AppError(BaseErrorCodes.UNKNOWN_ERROR);
        }
    }

    private static userCredentialToModel (userCredential: UserCredential): User {
        return {
            id: userCredential.id,
            email: userCredential.email
        };
    }
}
