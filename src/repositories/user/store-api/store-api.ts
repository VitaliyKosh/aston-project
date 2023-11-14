import { userSignedIn, userSignedOut, userSignedUp, userSignsIn, userSignsUp } from './store-slice';
import { type User } from 'models/user';
import { ReduxApiRepository } from 'repositories/redux';
import { type UserStoreApiRepository } from './types';

export class ReduxUserStoreApiRepository extends ReduxApiRepository implements UserStoreApiRepository {
    public userSignsUp (): void {
        this.api.dispatch(userSignsUp());
    }

    public userSignedUp (user: User): void {
        this.api.dispatch(userSignedUp(user));
    }

    public userSignsIn (): void {
        this.api.dispatch(userSignsIn());
    }

    public userSignedIn (user: User): void {
        this.api.dispatch(userSignedIn(user));
    }

    public userSignsOut (): void {
        this.api.dispatch(userSignsIn());
    }

    public userSignedOut (): void {
        this.api.dispatch(userSignedOut());
    }

    public getUser (): User {
        return this.api.getState().userReducer.user;
    }
}
