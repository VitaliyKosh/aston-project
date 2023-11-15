import { type ReduxStoreApi } from 'repositories/redux';
import { type FirebaseApi } from './firebase';
import { type LSApi } from './local-storage/ls-api';

export type Api = FirebaseApi | ReduxStoreApi | LSApi;

export abstract class ApiRepository {
    readonly api: Api;

    constructor (api: Api) {
        this.api = api;
    }
}
