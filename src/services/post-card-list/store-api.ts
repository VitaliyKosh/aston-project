import { type PostCard } from 'models/post-card-list';
import { type PostStoreApiRepository } from 'repositories/post-card-list/store-api';
import { ApiService } from 'services/types';

export class PostCardListStoreApiService extends ApiService {
    storeApiRepository: PostStoreApiRepository;

    public async readModel (count: number): Promise<PostCard[]> {
        return await this.storeApiRepository.readModel(count);
    }
}
