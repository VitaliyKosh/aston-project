export interface User {
    id: string
    email: string
}

export enum LoginStatus {
    Pending = 'Pending',
    LoggedIn = 'LoggedIn',
    LoggedOut = 'LoggedOut',
}

export interface UserModel {
    signedUp: (email: string, password: string) => Promise<void>
    signedIn: (email: string, password: string) => Promise<void>
    signedOut: () => Promise<void>
};
