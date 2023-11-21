import { type UserModel } from 'models/user';
import { reduxStore, type ReduxStoreApi } from 'repositories/redux';
import { createPostCardListComposition } from '../post-card-list';
import { FirebaseApi } from 'repositories/firebase';
import { createUserComposition } from 'features/user';
import { type PostCardListModel } from 'models/post-card-list';
import { LSApi } from 'repositories/local-storage';
import { createFavoritesComposition } from 'features/favorites/favorites.composition';
import { type FavoritesModel } from 'models/favorites';
import { type PostModel } from 'models/post';
import { createPostComposition } from 'features/post';

export class Application {
    #reduxStoreApi!: ReduxStoreApi;
    #firebaseApi!: FirebaseApi;
    #lsApi!: LSApi;

    post!: PostModel;
    postCardList!: PostCardListModel;
    user!: UserModel;
    favorites!: FavoritesModel;

    constructor () {
        this.setupApi();
        this.setupInputs();
    }

    private setupApi (): void {
        this.#reduxStoreApi = reduxStore;
        this.#firebaseApi = new FirebaseApi();
        this.#lsApi = new LSApi();
    }

    private setupInputs (): void {
        this.post = createPostComposition({ storeApi: this.#reduxStoreApi });
        this.postCardList = createPostCardListComposition({ storeApi: this.#reduxStoreApi });
        this.user = createUserComposition({
            api: process.env.DB === 'LS' ? this.#lsApi : this.#firebaseApi,
            storeApi: this.#reduxStoreApi,
            token: this.#lsApi
        });
        this.favorites = createFavoritesComposition({
            api: process.env.DB === 'LS' ? this.#lsApi : this.#firebaseApi
        });
    }

    getReduxStore (): ReduxStoreApi {
        return this.#reduxStoreApi;
    }
}
