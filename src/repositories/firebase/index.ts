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
import { getDatabase, type Database, ref, push, set, get, child } from 'firebase/database';
import { type Favorites } from 'shared/models/favorites';
import { type SearchHistory, type SearchItem } from 'shared/models/search-history';

export const firebaseConfig = {
    apiKey: 'AIzaSyAsz48ayjvoOhd90CPn31tGCAxWKDlWn2M',
    authDomain: 'aston-project-6e70a.firebaseapp.com',
    projectId: 'aston-project-6e70a',
    storageBucket: 'aston-project-6e70a.appspot.com',
    messagingSenderId: '560438180298',
    appId: '1:560438180298:web:831b32cfea37fabb157733',
    databaseURL: 'https://aston-project-6e70a-default-rtdb.europe-west1.firebasedatabase.app/'
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

        const searchList = await this.getSearchHistory();

        const newList = searchList.filter(f => f.id !== id);

        const searchListRef = ref(this.database, 'history/' + userId);
        void set(searchListRef, newList);
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
