import { FirebaseError } from 'firebase/app';
import { type User } from 'models/user';
import { type UserApiRepository, type UserWithToken } from '../types';
import { FirebaseApiRepository } from 'repositories/firebase';
import { type UserCredential } from 'firebase/auth';
import { AppError, AuthErrorCodes, BaseErrorCodes } from 'shared/lib/app-error/app-error';

export class UserFirebaseApiRepository extends FirebaseApiRepository implements UserApiRepository {
    public async signIn (email: string, password: string): Promise<UserWithToken> {
        try {
            const userCredential = await this.api.signIn(email, password);
            const token = await userCredential.user.getIdToken();
            const user = UserFirebaseApiRepository.userCredentialToModel(userCredential);
            return {
                user,
                token
            };
        } catch (e) {
            if (e instanceof FirebaseError) {
                throw new AppError(e.code);
            }
            throw new AppError(BaseErrorCodes.UNKNOWN_ERROR);
        }
    }

    public async signUp (email: string, password: string): Promise<UserWithToken> {
        try {
            const userCredential = await this.api.signUp(email, password);
            const token = await userCredential.user.getIdToken();
            const user = UserFirebaseApiRepository.userCredentialToModel(userCredential);
            return {
                user,
                token
            };
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

    public async validateToken (): Promise<UserWithToken> {
        try {
            const user = await this.api.refresh();

            if (!user) {
                throw new AppError(AuthErrorCodes.UNAUTHORIZED);
            }

            return {
                user: {
                    email: user.email ?? '',
                    id: user.uid
                },
                token: await user.getIdToken()
            };
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
