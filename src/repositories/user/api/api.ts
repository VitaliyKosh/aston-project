import { FirebaseError } from 'firebase/app';
import { FirebaseApiRepository } from 'repositories/types';
import { UserAuthError } from './errors';
import { type User } from 'models/user';
import { type UserApiRepository } from './types';

export class FirebaseUserApiRepository extends FirebaseApiRepository implements UserApiRepository {
    public async signIn (email: string, password: string): Promise<User> {
        try {
            const userCredential = await this.api.signIn(email, password);
            return {
                id: userCredential.user.uid,
                email: userCredential.user.email
            };
        } catch (e) {
            if (e instanceof FirebaseError) {
                throw new UserAuthError(e);
            }
        }
    }

    public async signUp (email: string, password: string): Promise<User> {
        try {
            const userCredential = await this.api.signUp(email, password);
            return {
                id: userCredential.user.uid,
                email: userCredential.user.email
            };
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
}
