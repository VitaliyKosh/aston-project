import { type AppStore } from 'repositories/store';

export abstract class StoreApiRepository {
    readonly store: AppStore;

    constructor (store: AppStore) {
        this.store = store;
    }
}
