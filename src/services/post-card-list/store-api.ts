import { type PostCard } from 'shared/models/post-card-list';
import { type PostCardListStoreApiRepository } from 'repositories/post-card-list/store-api/store-api';
import { type ApiService } from 'services/types';
import { type DispatchResult } from 'repositories/redux/types';

export class PostCardListStoreApiService implements ApiService {
    apiRepository: PostCardListStoreApiRepository;

    constructor (apiRepository: PostCardListStoreApiRepository) {
        this.apiRepository = apiRepository;
    }

    public async readModel (count: number): Promise<PostCard[]> {
        return await this.apiRepository.getPostCardList(count);
    }

    public async searchingCardList (
        query: string | null | undefined,
        limit?: number
    ): Promise<DispatchResult<PostCard[]>> {
        return await this.apiRepository.searchingCardList(query, limit);
    }
}
