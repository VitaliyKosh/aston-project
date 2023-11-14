import { AuthErrorCodes } from 'firebase/auth';
import { type FirebaseError } from 'firebase/app';
import { ApiError } from 'repositories/types';

export class UserAuthError extends ApiError {
    static types = AuthErrorCodes;
    type: string;

    constructor (e: FirebaseError) {
        super(e);
        this.type = e.code;
    }
}
