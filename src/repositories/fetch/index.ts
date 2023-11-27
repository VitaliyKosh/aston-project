import { ApiRepository } from 'repositories/types';
import { type FetchApi } from 'shared/lib/network/api-libraries/fetch';

export abstract class FetchApiRepository extends ApiRepository {
    readonly api: FetchApi;

    constructor (api: FetchApi) {
        super();
        this.api = api;
    }
}
