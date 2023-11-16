import { type PostCard } from 'models/post-card-list';
import { type PostStoreApiRepository } from 'repositories/post-card-list/store-api/store-api';
import { type ApiService } from 'services/types';

export class PostCardListStoreApiService implements ApiService {
    apiRepository: PostStoreApiRepository;

    constructor (apiRepository: PostStoreApiRepository) {
        this.apiRepository = apiRepository;
    }

    public async readModel (count: number): Promise<PostCard[]> {
        return await this.apiRepository.readModel(count);
    }
}
