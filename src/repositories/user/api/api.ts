import { FirebaseError } from 'firebase/app';
import { type User } from 'models/user';
import { type UserApiRepository } from '../types';
import { FirebaseApiRepository } from 'repositories/firebase';
import { type UserCredential } from 'firebase/auth';
import { AppError, BaseErrorCodes } from 'repositories/error';

export class UserFirebaseApiRepository extends FirebaseApiRepository implements UserApiRepository {
    public async signIn (email: string, password: string): Promise<User> {
        try {
            const userCredential = await this.api.signIn(email, password);
            const user = UserFirebaseApiRepository.userCredentialToModel(userCredential);
            return user;
        } catch (e) {
            if (e instanceof FirebaseError) {
                throw new AppError(e.code);
            }
            throw new AppError(BaseErrorCodes.UNKNOWN_ERROR);
        }
    }

    public async signUp (email: string, password: string): Promise<User> {
        try {
            const userCredential = await this.api.signUp(email, password);
            const user = UserFirebaseApiRepository.userCredentialToModel(userCredential);
            return user;
        } catch (e) {
            if (e instanceof FirebaseError) {
                throw new AppError(e.code);
            }
            throw new AppError(BaseErrorCodes.UNKNOWN_ERROR);
        }
    }

    public async signOut (): Promise<void> {
        try {
            await this.api.signOut();
        } catch (e) {
            if (e instanceof FirebaseError) {
                throw new AppError(e.code);
            }
            throw new AppError(BaseErrorCodes.UNKNOWN_ERROR);
        }
    }

    private static userCredentialToModel (userCredential: UserCredential): User {
        return {
            id: userCredential.user.uid,
            email: userCredential.user.email ?? ''
        };
    }
}
