import { type AppStore, setupStore } from 'repositories/store';
import { createPostCardListComposition } from '../post-card-list';
import { type PostCardList } from 'features/post-card-list/post-card-list';

export class Application {
    store: AppStore;

    // inputs
    postCardList: PostCardList;

    constructor () {
        this.setupStore();
        this.setupInputs();
    }

    private setupStore (): void {
        this.store = setupStore();
    }

    private setupInputs (): void {
        this.postCardList = createPostCardListComposition(this.store);
    }
}
