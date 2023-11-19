import { type UserWithToken, type UserApiRepository } from 'repositories/user';
import { ApiService } from 'services/types';

export class UserApiService extends ApiService {
    apiRepository: UserApiRepository;

    constructor (apiRepository: UserApiRepository) {
        super();
        this.apiRepository = apiRepository;
    }

    public async signIn (email: string, password: string): Promise<UserWithToken> {
        return await this.apiRepository.signIn(email, password);
    }

    public async signUp (email: string, password: string): Promise<UserWithToken> {
        return await this.apiRepository.signUp(email, password);
    }

    public async signOut (): Promise<void> {
        await this.apiRepository.signOut();
    }

    public async validateToken (token: string): Promise<UserWithToken | null> {
        return await this.apiRepository.validateToken(token);
    }
}
