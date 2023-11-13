import { type PostCardListStoreApiService } from '../../services/post-card-list';
import { type PostCard, type PostCardListModel } from '../../models/post-card-list';

export interface Dependencies {
    storeService: PostCardListStoreApiService
};

export class PostCardList implements PostCardListModel {
    readonly #storeService: PostCardListStoreApiService;

    constructor (deps: Dependencies) {
        this.#storeService = deps.storeService;
    }

    async getCardList (count: number): Promise<PostCard[]> {
        const postCardList = this.#storeService.readModel(count);
        return await postCardList;
    }
}
