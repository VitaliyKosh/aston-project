import { type UserModel } from 'models/user';
import { setupStore, type ReduxStoreApi } from 'repositories/redux';
import { createPostCardListComposition } from '../post-card-list';
import { FirebaseApi } from 'repositories/firebase';
import { createUserComposition } from 'features/user';
import { type PostCardListModel } from 'models/post-card-list';
import { LSApi } from 'repositories/local-storage';

export class Application {
    #reduxStoreApi!: ReduxStoreApi;
    #firebaseApi!: FirebaseApi;
    #lsApi!: LSApi;

    postCardList!: PostCardListModel;
    user!: UserModel;

    constructor () {
        this.setupApi();
        this.setupInputs();
    }

    private setupApi (): void {
        this.#reduxStoreApi = setupStore();
        this.#firebaseApi = new FirebaseApi();
        this.#lsApi = new LSApi();
    }

    private setupInputs (): void {
        this.postCardList = createPostCardListComposition({ storeApi: this.#reduxStoreApi });
        this.user = createUserComposition({
            api: process.env.DB === 'LS' ? this.#lsApi : this.#firebaseApi,
            storeApi: this.#reduxStoreApi
        });
    }

    getReduxStore (): ReduxStoreApi {
        return this.#reduxStoreApi;
    }
}
