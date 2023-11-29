import { LSApiRepository } from 'repositories/local-storage/ls-api';
import { type UserTokenRepository } from '../types';

export class UserLSTokenRepository extends LSApiRepository implements UserTokenRepository {
    saveToken (token: string): void {
        this.api.saveToken(token);
    }

    readToken (): string | null {
        return this.api.readToken();
    }
}
