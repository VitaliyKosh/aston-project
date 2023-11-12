import { type PostCard } from '../../models/post-card-list';
import { type PostApiRepository } from '../../repositories/post-card-list';

export class PostCardListApiService {
    readonly apiRepository: PostApiRepository;

    constructor (apiRepository: PostApiRepository) {
        this.apiRepository = apiRepository;
    }

    public async getPostCardList (): Promise<PostCard[]> {
        const postCardList = this.apiRepository.getPostCardList();
        return await postCardList;
    }
}
