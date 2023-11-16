import { type FirebaseApp, initializeApp } from 'firebase/app';
import {
    type Auth,
    type UserCredential,
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { ApiRepository } from 'repositories/types';

export const firebaseConfig = {
    apiKey: 'AIzaSyAsz48ayjvoOhd90CPn31tGCAxWKDlWn2M',
    authDomain: 'aston-project-6e70a.firebaseapp.com',
    projectId: 'aston-project-6e70a',
    storageBucket: 'aston-project-6e70a.appspot.com',
    messagingSenderId: '560438180298',
    appId: '1:560438180298:web:831b32cfea37fabb157733'
};

export class FirebaseApi {
    readonly app: FirebaseApp;
    readonly auth: Auth;

    constructor () {
        this.app = initializeApp(firebaseConfig);
        this.auth = getAuth();
    }

    async signIn (email: string, password: string): Promise<UserCredential> {
        return await signInWithEmailAndPassword(this.auth, email, password);
    };

    async signUp (email: string, password: string): Promise<UserCredential> {
        return await createUserWithEmailAndPassword(this.auth, email, password);
    };

    async signOut (): Promise<void> {
        await signOut(this.auth);
    };
}

export abstract class FirebaseApiRepository extends ApiRepository {
    readonly api: FirebaseApi;

    constructor (api: FirebaseApi) {
        super();
        this.api = api;
    }
}
