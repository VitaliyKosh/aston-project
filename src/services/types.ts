import { type StoreApiRepository } from 'repositories/types';

export abstract class StoreApiService {
    readonly storeApiRepository: StoreApiRepository;

    constructor (storeApiRepository: StoreApiRepository) {
        this.storeApiRepository = storeApiRepository;
    }
}
