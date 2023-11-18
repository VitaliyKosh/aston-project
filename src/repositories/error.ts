export enum BaseErrorCodes {
    UNKNOWN_ERROR = 'unknown_error'
};

export enum ReactErrorCodes {
    NO_ROOT = 'react/no_root'
};

export enum AuthErrorCodes {
    INCORRECT_EMAIL = 'auth/incorrect_email',
    INCORRECT_PASSWORD = 'auth/incorrect_password',
    EMAIL_OCCUPIED = 'auth/email_occupied',
    UNAUTHORIZED = 'auth/unauthorized',
    USER_DOES_NOT_EXIST = 'auth/user_does_not_exist',
};

export enum PostErrorCodes {
    FETCH_POST_FAIL = 'post/fetch_post_fail',
    FETCH_POST_CARDS_FAIL = 'post/fetch_post_cards_fail',
};

export type ApiErrorCodes = BaseErrorCodes | AuthErrorCodes | ReactErrorCodes;

export class AppError extends Error {
    type: string;

    constructor (code: string, message?: string) {
        super(message ?? code);
        this.type = code;
    }
}
