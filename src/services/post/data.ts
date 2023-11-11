import { type PostCard } from '../../models/post-card-list';
import { type PostApiRepository } from '../../repositories/post';

interface Dependencies {
    apiRepository: PostApiRepository
};

export class PostDataService {
    readonly apiRepository: PostApiRepository;

    constructor (deps: Dependencies) {
        this.apiRepository = deps.apiRepository;
    }

    public async getPostCardList (): Promise<PostCard[]> {
        const postCardList = this.apiRepository.getPostCardList();
        return await postCardList;
    }
}
