import { type UserState, userSignedIn, userSignedOut, userSignedUp, userSignsIn, userSignsUp } from './store-slice';
import { type AuthStatus, type User } from 'shared/models/user';
import { ReduxApiRepository } from 'repositories/redux';
import { type UserStoreApiRepository } from '../types';

export class ReduxUserStoreApiRepository extends ReduxApiRepository implements UserStoreApiRepository {
    private getRootState (): UserState {
        return this.getState().userReducer;
    }

    public userSignsUp (): void {
        this.dispatch(userSignsUp());
    }

    public userSignedUp (user: User): void {
        this.dispatch(userSignedUp(user));
    }

    public userSignsIn (): void {
        this.dispatch(userSignsIn());
    }

    public userSignedIn (user: User): void {
        this.dispatch(userSignedIn(user));
    }

    public userSignsOut (): void {
        this.dispatch(userSignsIn());
    }

    public userSignedOut (): void {
        this.dispatch(userSignedOut());
    }

    public getUser (): User {
        return this.getRootState().user;
    }

    public getAuthStatus (): AuthStatus {
        return this.getRootState().authStatus;
    }
}
