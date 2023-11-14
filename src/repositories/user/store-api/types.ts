import { type User } from 'models/user';
import { type ApiRepository } from 'repositories/types';

export interface UserStoreApiRepository extends ApiRepository {
    userSignsUp: () => void
    userSignedUp: (user: User) => void
    userSignsIn: () => void
    userSignedIn: (user: User) => void
    userSignsOut: () => void
    userSignedOut: () => void
    getUser: () => User
};
