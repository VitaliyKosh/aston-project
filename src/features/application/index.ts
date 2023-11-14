import { type UserModel } from 'models/user';
import { setupStore, type ReduxStoreApi } from 'repositories/store';
import { createPostCardListComposition } from '../post-card-list';
import { FirebaseApi } from 'repositories/firebase';
import { createUserComposition } from 'features/user';
import { type PostCardListModel } from 'models/post-card-list';

export class Application {
    #reduxStoreApi: ReduxStoreApi;
    #firebaseApi: FirebaseApi;

    // inputs
    postCardList: PostCardListModel;
    user: UserModel;

    constructor () {
        this.setupApi();
        this.setupInputs();
    }

    private setupApi (): void {
        this.#reduxStoreApi = setupStore();
        this.#firebaseApi = new FirebaseApi();
    }

    private setupInputs (): void {
        this.postCardList = createPostCardListComposition({ storeApi: this.#reduxStoreApi });
        this.user = createUserComposition({ api: this.#firebaseApi, storeApi: this.#reduxStoreApi });
    }
}
