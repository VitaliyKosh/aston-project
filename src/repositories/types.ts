import { type ReduxStoreApi } from 'repositories/redux';
import { type FirebaseApi } from './firebase';

export type Api = FirebaseApi | ReduxStoreApi;

export abstract class ApiRepository {
    readonly api: Api;

    constructor (api: Api) {
        this.api = api;
    }
}
