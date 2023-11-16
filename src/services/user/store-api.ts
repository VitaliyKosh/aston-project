import { type AuthStatus, type User } from 'models/user';
import { type UserStoreApiRepository } from 'repositories/user';
import { type ApiService } from 'services/types';

export class UserStoreApiService implements ApiService {
    apiRepository: UserStoreApiRepository;

    constructor (apiRepository: UserStoreApiRepository) {
        this.apiRepository = apiRepository;
    }

    public userSignsUp (): void {
        this.apiRepository.userSignsUp();
    }

    public userSignedUp (user: User): void {
        this.apiRepository.userSignedUp(user);
    }

    public userSignsIn (): void {
        this.apiRepository.userSignsIn();
    }

    public userSignedIn (user: User): void {
        this.apiRepository.userSignedIn(user);
    }

    public userSignsOut (): void {
        this.apiRepository.userSignsOut();
    }

    public userSignedOut (): void {
        this.apiRepository.userSignedOut();
    }

    public getUser (): User {
        return this.apiRepository.getUser();
    }

    public getAuthStatus (): AuthStatus {
        return this.apiRepository.getAuthStatus();
    }
}
