export interface User {
    id: string
    email: string
}

export enum AuthStatus {
    Pending = 'Pending',
    SignedIn = 'SignedIn',
    SignedOut = 'SignedOut',
}

export interface UserModel {
    signedUp: (email: string, password: string) => Promise<void>
    signedIn: (email: string, password: string) => Promise<void>
    signedOut: () => Promise<void>
    getUser: () => User
    getAuthStatus: () => AuthStatus
    validateToken: () => Promise<void>
};
