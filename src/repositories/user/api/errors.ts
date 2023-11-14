import { AuthErrorCodes } from 'firebase/auth';
import { type FirebaseError } from 'firebase/app';

export class UserAuthError extends Error {
    static types = AuthErrorCodes;
    type: string;

    constructor (e: FirebaseError) {
        super(e.message);
        this.type = e.code;
    }
}
