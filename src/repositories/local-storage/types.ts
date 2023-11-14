export const LSAuthErrorCodes = {
    INCORRECT_EMAIL: 'incorrect_email',
    INCORRECT_PASSWORD: 'incorrect_password',
    EMAIL_OCCUPIED: 'email_occupied'
};

export interface UserDbModel {
    id: string
    email: string
    password: string
};

export interface UserCredential {
    id: string
    email: string
};
