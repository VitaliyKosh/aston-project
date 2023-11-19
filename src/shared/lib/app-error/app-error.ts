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

export type ApiErrorCodes = BaseErrorCodes | AuthErrorCodes | ReactErrorCodes | PostErrorCodes;

export const errorMessages: Record<ApiErrorCodes, string> = {
    [BaseErrorCodes.UNKNOWN_ERROR]: 'Неизвестная ошибка',
    [AuthErrorCodes.INCORRECT_EMAIL]: 'Неверный Email',
    [AuthErrorCodes.INCORRECT_PASSWORD]: 'Неверный пароль',
    [AuthErrorCodes.EMAIL_OCCUPIED]: 'Данный Email уже занят',
    [AuthErrorCodes.UNAUTHORIZED]: 'Не авторизован',
    [AuthErrorCodes.USER_DOES_NOT_EXIST]: 'Пользователь не существует',
    [ReactErrorCodes.NO_ROOT]: 'Ошибка UI',
    [PostErrorCodes.FETCH_POST_FAIL]: 'Невозможно загрузить посты',
    [PostErrorCodes.FETCH_POST_CARDS_FAIL]: 'Невозможно загрузить карточки постов'
};

export class AppError extends Error {
    type: string;

    constructor (code: string, message?: string) {
        if (isErrorMessageCode(code)) {
            super(errorMessages[code]);
        } else {
            super(message ?? code);
        }
        this.type = code;
    }
}

function isErrorMessageCode (code: string): code is ApiErrorCodes {
    return Object.keys(errorMessages).includes(code);
}

export const getSafeError = (e: unknown): AppError => {
    if (e instanceof AppError) {
        return e;
    }
    return new AppError(BaseErrorCodes.UNKNOWN_ERROR);
};
