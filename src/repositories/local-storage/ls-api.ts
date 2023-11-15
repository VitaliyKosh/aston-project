import { ApiRepository } from 'repositories/types';
import { v4 } from 'uuid';
import { LSError } from './error';
import { LSAuthErrorCodes, type UserDbModel, type UserCredential } from './types';

const dbPrefix = 'db';

export class LSApi {
    signUp (email: string, password: string): UserCredential {
        const candidate = LSApi.getUserByEmail(email);

        if (candidate) {
            throw new LSError(LSAuthErrorCodes.EMAIL_OCCUPIED);
        }

        const user = {
            email,
            password
        };

        const userId = LSApi.createUser(user);
        const newUser = LSApi.getUserById(userId);
        return LSApi.getUserCredential(newUser);
    };

    signIn (email: string, password: string): UserCredential {
        const user = LSApi.getUserByEmail(email);

        if (!user) {
            throw new LSError(LSAuthErrorCodes.INCORRECT_EMAIL);
        }

        if (user.password !== password) {
            throw new LSError(LSAuthErrorCodes.INCORRECT_PASSWORD);
        }

        return LSApi.getUserCredential(user);
    };

    signOut (): void {};

    private static getUserById (id: string): UserDbModel | null {
        return JSON.parse(localStorage.getItem(LSApi.getDBPath(['users', id])));
    }

    private static getUserByEmail (email: string): UserDbModel | null {
        const keys = Object.keys(localStorage);
        for (const key of keys) {
            if (key.startsWith(LSApi.getDBPath(['users']))) {
                const user = JSON.parse(localStorage.getItem(key)) as UserDbModel;

                if (user.email === email) {
                    return user;
                }
            }
        }
        return null;
    }

    private static createUser (newUser: Omit<UserDbModel, 'id'>): string {
        const id = v4();

        const user: UserDbModel = {
            id,
            email: newUser.email,
            password: newUser.password
        };

        localStorage.setItem(LSApi.getDBPath(['users', id]), JSON.stringify(user));

        return id;
    }

    private static getUserCredential (user: UserDbModel): UserCredential {
        return {
            id: user.id,
            email: user.email
        };
    }

    private static getDBPath (segments: string[]): string {
        return [dbPrefix, ...segments].join('/');
    }
}

export abstract class LSApiRepository extends ApiRepository {
    readonly api: LSApi;

    constructor (api: LSApi) {
        super(api);
    }
}
