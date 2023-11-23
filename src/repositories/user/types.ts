import { type AuthStatus, type User } from 'shared/models/user';
import { type ApiRepository } from 'repositories/types';

export interface UserWithToken { user: User, token: string }

export interface UserApiRepository extends ApiRepository {
    signIn: (email: string, password: string) => Promise<UserWithToken>
    signUp: (email: string, password: string) => Promise<UserWithToken>
    signOut: () => Promise<void>
    validateToken: (token: string) => Promise<UserWithToken | null>
};

export interface UserStoreApiRepository extends ApiRepository {
    userSignsUp: () => void
    userSignedUp: (user: User) => void
    userSignsIn: () => void
    userSignedIn: (user: User) => void
    userSignsOut: () => void
    userSignedOut: () => void
    getUser: () => User
    getAuthStatus: () => AuthStatus
};

export interface UserTokenRepository extends ApiRepository {
    saveToken: (token: string) => void
    readToken: () => string | null
};
