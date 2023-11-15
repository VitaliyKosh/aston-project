import { type AuthStatus, type User, type UserModel } from 'models/user';
import { type UserStoreApiService, type UserApiService } from 'services/user';

export interface Dependencies {
    apiService: UserApiService
    storeApiService: UserStoreApiService
};

export class UserFeature implements UserModel {
    readonly #apiService: UserApiService;
    readonly #storeApiService: UserStoreApiService;

    constructor (deps: Dependencies) {
        this.#apiService = deps.apiService;
        this.#storeApiService = deps.storeApiService;
    }

    async signedUp (email: string, password: string): Promise<void> {
        this.#storeApiService.userSignsUp();
        const user = await this.#apiService.signUp(email, password);
        this.#storeApiService.userSignedUp(user);
    }

    async signedIn (email: string, password: string): Promise<void> {
        this.#storeApiService.userSignsIn();
        const user = await this.#apiService.signIn(email, password);
        this.#storeApiService.userSignedIn(user);
    }

    async signedOut (): Promise<void> {
        this.#storeApiService.userSignsOut();
        void this.#apiService.signOut();
        this.#storeApiService.userSignedOut();
    }

    getUser (): User {
        return this.#storeApiService.getUser();
    }

    getAuthStatus (): AuthStatus {
        return this.#storeApiService.getLoginStatus();
    }
}
