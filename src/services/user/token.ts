import { type UserTokenRepository } from './../../repositories/user/types';
import { ApiService } from 'services/types';

export class UserTokenService extends ApiService {
    apiRepository: UserTokenRepository;

    constructor (apiRepository: UserTokenRepository) {
        super();
        this.apiRepository = apiRepository;
    }

    public saveToken (token: string): void {
        this.apiRepository.saveToken(token);
    }

    public readToken (): string | null {
        return this.apiRepository.readToken();
    }
}
