import { type FeatureFlagsModel } from '../../shared/models/feature-flags';
import { type UserModel } from 'shared/models/user';
import { reduxStore, type ReduxStoreApi } from 'repositories/redux/redux';
import { createPostCardListComposition } from '../post-card-list';
import { FirebaseApi } from 'repositories/firebase/firebase-api';
import { createUserComposition } from 'features/user';
import { type PostCardListModel } from 'shared/models/post-card-list';
import { LSApi } from 'repositories/local-storage';
import { createFavoritesComposition } from 'features/favorites/favorites.composition';
import { type FavoritesModel } from 'shared/models/favorites';
import { type PostModel } from 'shared/models/post';
import { createPostComposition } from 'features/post';
import { createFeatureFlagsComposition } from 'features/feature-flags';
import { FetchApi } from 'shared/lib/network/api-libraries/fetch';
import { type SearchHistoryModel } from 'shared/models/search-history';
import { createSearchHistoryComposition } from 'features/search-history';

export class Application {
    #reduxStoreApi!: ReduxStoreApi;
    #firebaseApi!: FirebaseApi;
    #lsApi!: LSApi;
    #fetchApi!: FetchApi;

    post!: PostModel;
    postCardList!: PostCardListModel;
    user!: UserModel;
    favorites!: FavoritesModel;
    featureFlags!: FeatureFlagsModel;
    searchHistory!: SearchHistoryModel;

    constructor () {
        this.setupApi();
        this.setupInputs();
    }

    private setupApi (): void {
        this.#reduxStoreApi = reduxStore;
        this.#firebaseApi = new FirebaseApi();
        this.#lsApi = new LSApi();
        this.#fetchApi = new FetchApi({
            base: process.env.API_URL
        });
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
        this.featureFlags = createFeatureFlagsComposition({
            api: this.#fetchApi
        });
        this.searchHistory = createSearchHistoryComposition({
            api: process.env.DB === 'LS' ? this.#lsApi : this.#firebaseApi
        });
    }

    getReduxStore (): ReduxStoreApi {
        return this.#reduxStoreApi;
    }
}
