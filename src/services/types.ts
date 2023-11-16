import { type ApiRepository } from 'repositories/types';

export abstract class ApiService {
    declare readonly apiRepository: ApiRepository;
}
