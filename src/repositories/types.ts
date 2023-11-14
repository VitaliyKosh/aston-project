import { type ReduxStoreApi } from 'repositories/store';
import { type FirebaseApi } from './firebase';

export type Api = FirebaseApi | ReduxStoreApi;

export abstract class ApiRepository {
    readonly api: Api;

    constructor (api: Api) {
        this.api = api;
    }
}

export class ApiError extends Error {
    type: string;

    constructor (e: Error) {
        super(e.message);
        this.type = e.message;
    }
}

export abstract class ReduxApiRepository extends ApiRepository {
    readonly api: ReduxStoreApi;

    constructor (api: ReduxStoreApi) {
        super(api);
    }
}

export abstract class FirebaseApiRepository extends ApiRepository {
    readonly api: FirebaseApi;

    constructor (api: FirebaseApi) {
        super(api);
    }
}
