import { FirebaseError } from 'firebase/app';
import { UserAuthError } from './errors';
import { type User } from 'models/user';
import { type UserApiRepository } from '../types';
import { FirebaseApiRepository } from 'repositories/firebase';
import { type UserCredential } from 'firebase/auth';

export class UserFirebaseApiRepository extends FirebaseApiRepository implements UserApiRepository {
    public async signIn (email: string, password: string): Promise<User> {
        try {
            const userCredential = await this.api.signIn(email, password);
            const user = UserFirebaseApiRepository.userCredentialToModel(userCredential);
            return user;
        } catch (e) {
            if (e instanceof FirebaseError) {
                throw new UserAuthError(e);
            }
        }
    }

    public async signUp (email: string, password: string): Promise<User> {
        try {
            const userCredential = await this.api.signUp(email, password);
            const user = UserFirebaseApiRepository.userCredentialToModel(userCredential);
            return user;
        } catch (e) {
            if (e instanceof FirebaseError) {
                throw new UserAuthError(e);
            }
        }
    }

    public async signOut (): Promise<void> {
        try {
            await this.api.signOut();
        } catch (e) {
            if (e instanceof FirebaseError) {
                throw new UserAuthError(e);
            }
        }
    }

    private static userCredentialToModel (userCredential: UserCredential): User {
        return {
            id: userCredential.user.uid,
            email: userCredential.user.email
        };
    }
}
