import { ApiRepository } from 'repositories/types';
import { v4 } from 'uuid';
import { type UserDbModel, type UserCredential } from './types';
import { AppError, AuthErrorCodes, BaseErrorCodes } from 'repositories/error';

const dbPrefix = 'db';

export class LSApi {
    signUp (email: string, password: string): UserCredential {
        const candidate = LSApi.getUserByEmail(email);

        if (candidate) {
            throw new AppError(AuthErrorCodes.EMAIL_OCCUPIED);
        }

        const user = {
            email,
            password
        };

        const userId = LSApi.createUser(user);
        const newUser = LSApi.getUserById(userId);

        if (!newUser) {
            throw new AppError(BaseErrorCodes.UNKNOWN_ERROR);
        }

        return LSApi.getUserCredential(newUser);
    };

    signIn (email: string, password: string): UserCredential {
        const user = LSApi.getUserByEmail(email);

        if (!user) {
            throw new AppError(AuthErrorCodes.INCORRECT_EMAIL);
        }

        if (user.password !== password) {
            throw new AppError(AuthErrorCodes.INCORRECT_PASSWORD);
        }

        return LSApi.getUserCredential(user);
    };

    signOut (): void {};

    private static getUserById (id: string): UserDbModel | null {
        const item = localStorage.getItem(LSApi.getDBPath(['users', id]));
        return item ? JSON.parse(item) : null;
    }

    private static getUserByEmail (email: string): UserDbModel | null {
        const keys = Object.keys(localStorage);
        for (const key of keys) {
            if (key.startsWith(LSApi.getDBPath(['users']))) {
                const item = localStorage.getItem(key);

                if (!item) {
                    throw new AppError(BaseErrorCodes.UNKNOWN_ERROR);
                }

                const user = JSON.parse(item) as UserDbModel;

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
        super();
        this.api = api;
    }
}
