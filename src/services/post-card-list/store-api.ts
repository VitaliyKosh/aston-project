import { type PostCard } from 'shared/models/post-card-list';
import { type PostCardListStoreApiRepository } from 'repositories/post-card-list/store-api/store-api';
import { type ApiService } from 'services/types';

export class PostCardListStoreApiService implements ApiService {
    apiRepository: PostCardListStoreApiRepository;

    constructor (apiRepository: PostCardListStoreApiRepository) {
        this.apiRepository = apiRepository;
    }

    public async readModel (count: number): Promise<PostCard[]> {
        return await this.apiRepository.getPostCardList(count);
    }
}
