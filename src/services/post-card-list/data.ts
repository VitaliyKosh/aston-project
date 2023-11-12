import { type PostCard } from '../../models/post-card-list';
import { type PostApiRepository } from '../../repositories/post-card-list';

interface Dependencies {
    apiRepository: PostApiRepository
};

export class PostCardListDataService {
    readonly apiRepository: PostApiRepository;

    constructor (deps: Dependencies) {
        this.apiRepository = deps.apiRepository;
    }

    public async getPostCardList (): Promise<PostCard[]> {
        const postCardList = this.apiRepository.getPostCardList();
        return await postCardList;
    }
}
