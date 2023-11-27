import { type FirebaseApp, initializeApp } from 'firebase/app';
import {
    type Auth,
    type UserCredential,
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    type User
} from 'firebase/auth';
import { ApiRepository } from 'repositories/types';
import { getDatabase, type Database, ref, push, set, get, child, remove } from 'firebase/database';
import { type Favorites } from 'shared/models/favorites';
import { type SearchHistory } from 'shared/models/search-history';

export const firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    storageBucket: process.env.FB_STORAGE_BUCKET,
    messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
    appId: process.env.FB_APP_ID,
    databaseURL: process.env.FB_DB_URL
};

export class FirebaseApi {
    readonly app: FirebaseApp;
    readonly auth: Auth;
    readonly database: Database;

    constructor () {
        this.app = initializeApp(firebaseConfig);
        this.auth = getAuth();
        this.database = getDatabase(this.app);
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

    async refresh (): Promise<User | null | undefined> {
        await this.auth.authStateReady();
        return this.auth.currentUser;
    };

    async favoriteAdded (postId: string): Promise<void> {
        const userId = this.auth.currentUser?.uid;

        if (!userId) {
            return;
        }

        const favoritesListRef = ref(this.database, 'favorites/' + userId);
        const newFavoriteRef = push(favoritesListRef);

        void set(newFavoriteRef, postId);
    }

    async favoriteRemoved (postId: string): Promise<void> {
        const userId = this.auth.currentUser?.uid;

        if (!userId) {
            return;
        }

        const favorites = await this.readFavorites();

        const newList = favorites.filter(f => f !== postId);

        const favoritesListRef = ref(this.database, 'favorites/' + userId);
        void set(favoritesListRef, newList);
    }

    async readFavorites (): Promise<Favorites> {
        const userId = this.auth.currentUser?.uid;

        if (!userId) {
            return [];
        }

        const dbRef = ref(this.database);

        const snapshot = await get(child(dbRef, 'favorites/' + userId));

        if (!snapshot.exists()) {
            return [];
        }

        const data = snapshot.val() as Record<string, string>;

        return Object.values(data);
    }

    searched (query: string): void {
        const userId = this.auth.currentUser?.uid;

        if (!userId) {
            return;
        }

        const searchListRef = ref(this.database, 'history/' + userId);
        const newSearchesRef = push(searchListRef);

        void set(newSearchesRef, query);
    }

    async searchRemoved (id: string): Promise<void> {
        const userId = this.auth.currentUser?.uid;

        if (!userId) {
            return;
        }

        const searchRef = ref(this.database, 'history/' + userId + '/' + id);
        void remove(searchRef);
    }

    async getSearchHistory (): Promise<SearchHistory> {
        const userId = this.auth.currentUser?.uid;

        if (!userId) {
            return [];
        }

        const dbRef = ref(this.database);

        const snapshot = await get(child(dbRef, 'history/' + userId));

        if (!snapshot.exists()) {
            return [];
        }

        const data = snapshot.val() as Record<string, string>;

        return Object.entries(data).map(([key, value]) => ({ id: key, query: value }));
    }
}

export abstract class FirebaseApiRepository extends ApiRepository {
    readonly api: FirebaseApi;

    constructor (api: FirebaseApi) {
        super();
        this.api = api;
    }
}
