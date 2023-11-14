import { type ApiRepository } from 'repositories/types';

export abstract class ApiService {
    readonly apiRepository: ApiRepository;

    constructor (apiRepository: ApiRepository) {
        this.apiRepository = apiRepository;
    }
}
