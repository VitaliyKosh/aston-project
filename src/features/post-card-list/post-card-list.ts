import { type PostCardListStoreApiService } from 'services/post-card-list';
import { type PostCard, type PostCardListModel } from 'shared/models/post-card-list';

export interface Dependencies {
    storeApiService: PostCardListStoreApiService
};

export class PostCardListFeature implements PostCardListModel {
    readonly #storeApiService: PostCardListStoreApiService;

    constructor (deps: Dependencies) {
        this.#storeApiService = deps.storeApiService;
    }

    async getCardList (count: number): Promise<PostCard[]> {
        const postCardList = this.#storeApiService.readModel(count);
        return await postCardList;
    }
}
