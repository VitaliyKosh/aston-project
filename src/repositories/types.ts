import { type ReduxStoreApi } from 'repositories/redux';
import { type FirebaseApi } from './firebase';
import { type LSApi } from './local-storage/ls-api';
import { type FetchApi } from 'shared/lib/network/api-libraries/fetch';

export type Api = FirebaseApi | ReduxStoreApi | LSApi | FetchApi;

export abstract class ApiRepository {
    declare readonly api: Api;
}
