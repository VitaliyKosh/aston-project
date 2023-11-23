import { type AuthStatus, type User, type UserModel } from 'shared/models/user';
import { getSafeError } from 'shared/lib/app-error/app-error';
import { type UserStoreApiService, type UserApiService, type UserTokenService } from 'services/user';

export interface Dependencies {
    apiService: UserApiService
    storeApiService: UserStoreApiService
    tokenService: UserTokenService
};

export class UserFeature implements UserModel {
    readonly #apiService: UserApiService;
    readonly #storeApiService: UserStoreApiService;
    readonly #tokenService: UserTokenService;

    constructor (deps: Dependencies) {
        this.#apiService = deps.apiService;
        this.#storeApiService = deps.storeApiService;
        this.#tokenService = deps.tokenService;
    }

    async signedUp (email: string, password: string): Promise<void> {
        try {
            const { user, token } = await this.#apiService.signUp(email, password);
            this.#tokenService.saveToken(token);

            this.#storeApiService.userSignedUp(user);
        } catch (e) {
            this.#storeApiService.userSignedOut();
            throw getSafeError(e);
        }
    }

    async signedIn (email: string, password: string): Promise<void> {
        try {
            const { user, token } = await this.#apiService.signIn(email, password);

            this.#tokenService.saveToken(token);
            this.#storeApiService.userSignedIn(user);
        } catch (e) {
            this.#storeApiService.userSignedOut();
            throw getSafeError(e);
        }
    }

    async signedOut (): Promise<void> {
        try {
            void this.#apiService.signOut();
        } finally {
            this.#tokenService.saveToken('');
            this.#storeApiService.userSignedOut();
        }
    }

    getUser (): User {
        return this.#storeApiService.getUser();
    }

    getAuthStatus (): AuthStatus {
        return this.#storeApiService.getAuthStatus();
    }

    async validateToken (): Promise<void> {
        try {
            const token = this.#tokenService.readToken();

            if (!token) {
                this.#storeApiService.userSignedOut();
                return;
            }

            const validationData = await this.#apiService.validateToken(token);

            if (!validationData) {
                this.#storeApiService.userSignedOut();
                return;
            }

            const { user, token: newToken } = validationData;
            this.#tokenService.saveToken(newToken);

            this.#storeApiService.userSignedIn(user);
        } catch (e) {
            this.#storeApiService.userSignedOut();
        }
    }
}
