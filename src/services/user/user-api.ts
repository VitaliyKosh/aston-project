import { type User } from 'models/user';
import { type UserApiRepository } from 'repositories/user';
import { ApiService } from 'services/types';

export class UserApiService extends ApiService {
    apiRepository: UserApiRepository;

    public async signIn (email: string, password: string): Promise<User> {
        return await this.apiRepository.signIn(email, password);
    }

    public async signUp (email: string, password: string): Promise<User> {
        return await this.apiRepository.signUp(email, password);
    }

    public async signOut (): Promise<void> {
        await this.apiRepository.signOut();
    }
}
