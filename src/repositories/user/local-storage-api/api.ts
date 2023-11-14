import { type User } from 'models/user';
import { type UserApiRepository } from '../types';
import { LSApiRepository } from 'repositories/local-storage/ls-api';
import { UserAuthError } from '../api/errors';
import { LSError } from 'repositories/local-storage/error';
import { type UserCredential } from 'repositories/local-storage';

export class UserLSApiRepository extends LSApiRepository implements UserApiRepository {
    public async signIn (email: string, password: string): Promise<User> {
        try {
            const userCredential = this.api.signIn(email, password);
            const user = UserLSApiRepository.userCredentialToModel(userCredential);
            return user;
        } catch (e) {
            if (e instanceof LSError) {
                throw new UserAuthError(e.type);
            }
        }
    }

    public async signUp (email: string, password: string): Promise<User> {
        try {
            const userCredential = this.api.signUp(email, password);
            const user = UserLSApiRepository.userCredentialToModel(userCredential);
            return user;
        } catch (e) {
            if (e instanceof LSError) {
                throw new UserAuthError(e.type);
            }
        }
    }

    public async signOut (): Promise<void> {
        try {
            this.api.signOut();
        } catch (e) {
            if (e instanceof LSError) {
                throw new UserAuthError(e.type);
            }
        }
    }

    private static userCredentialToModel (userCredential: UserCredential): User {
        return {
            id: userCredential.id,
            email: userCredential.email
        };
    }
}
