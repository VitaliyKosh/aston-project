import { ApiRepository } from 'repositories/types';
import { v4 } from 'uuid';
import { type UserDbModel, type UserCredential } from './types';
import { AppError, AuthErrorCodes, BaseErrorCodes } from 'shared/lib/app-error/app-error';
import { type FavoriteItem, type Favorites } from 'shared/models/favorites';
import { type SearchHistory } from 'shared/models/search-history';

const dbPrefix = 'db';

export class LSApi {
    // User

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
        return item === null ? item : JSON.parse(item);
    }

    private static getUserByEmail (email: string): UserDbModel | null {
        const keys = Object.keys(localStorage);
        for (const key of keys) {
            if (key.startsWith(LSApi.getDBPath(['users']))) {
                const item = localStorage.getItem(key);

                if (item === null) {
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
            email: user.email,
            token: user.id
        };
    }

    // Token

    saveToken (token: string): void {
        localStorage.setItem(LSApi.getDBPath(['userToken']), JSON.stringify(token));
    }

    readToken (): string | null {
        const token = localStorage.getItem(LSApi.getDBPath(['userToken']));
        return token ? JSON.parse(token) : null;
    }

    validateToken (token: string): UserCredential | null {
        const user = LSApi.getUserById(token);

        if (!user) {
            return null;
        }

        return LSApi.getUserCredential(user);
    }

    private getUserIdByToken (): string {
        const token = this.readToken();

        if (!token) {
            throw new AppError(AuthErrorCodes.UNAUTHORIZED);
        }

        const user = LSApi.getUserById(token);

        if (!user) {
            throw new AppError(AuthErrorCodes.USER_DOES_NOT_EXIST);
        }

        return user.id;
    }

    // Favorite

    favoriteAdded (item: FavoriteItem): void {
        const userId = this.getUserIdByToken();

        const favorites = this.readFavorites();
        favorites.push(item);

        localStorage.setItem(LSApi.getDBPath(['favorites', userId]), JSON.stringify(favorites));
    }

    favoriteRemoved (item: FavoriteItem): void {
        const userId = this.getUserIdByToken();

        const favorites = this.readFavorites();
        const newFavorites = favorites.filter((f) => f !== item);

        localStorage.setItem(LSApi.getDBPath(['favorites', userId]), JSON.stringify(newFavorites));
    }

    readFavorites (): Favorites {
        const userId = this.getUserIdByToken();

        return JSON.parse(localStorage.getItem(LSApi.getDBPath(['favorites', userId])) ?? '[]');
    }

    // SearchHistory

    searched (query: string): void {
        const userId = this.getUserIdByToken();

        const searchHistory = this.getSearchHistory();

        const searchItem = {
            id: v4(),
            query
        };

        searchHistory.push(searchItem);

        localStorage.setItem(LSApi.getDBPath(['searchHistory', userId]), JSON.stringify(searchHistory));
    }

    searchRemoved (id: string): void {
        const userId = this.getUserIdByToken();

        const searchHistory = this.getSearchHistory();
        const newSearchHistory = searchHistory.filter((s) => s.id !== id);

        localStorage.setItem(LSApi.getDBPath(['searchHistory', userId]), JSON.stringify(newSearchHistory));
    }

    getSearchHistory (): SearchHistory {
        const userId = this.getUserIdByToken();

        return JSON.parse(localStorage.getItem(LSApi.getDBPath(['searchHistory', userId])) ?? '[]');
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
