import { type AppStore } from 'shared/store/store';

export abstract class StoreApiRepository {
    readonly store: AppStore;

    constructor (store: AppStore) {
        this.store = store;
    }
}
