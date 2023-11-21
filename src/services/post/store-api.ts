import { type Post } from 'models/post';
import { type PostStoreApiRepository } from 'repositories/post/store-api/store-api';
import { type ApiService } from 'services/types';

export class PostStoreApiService implements ApiService {
    apiRepository: PostStoreApiRepository;

    constructor (apiRepository: PostStoreApiRepository) {
        this.apiRepository = apiRepository;
    }

    public async getPost (count: string): Promise<Post> {
        return await this.apiRepository.getPost(count);
    }
}
