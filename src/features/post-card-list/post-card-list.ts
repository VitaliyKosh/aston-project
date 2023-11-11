import { type PostDataService, type PostStoreService } from '../../services/post';
import { type PostCard, type PostCardListModel } from '../../models/post-card-list';

export interface Dependencies {
    dataService: PostDataService
    storeService: PostStoreService
};

export class PostCardList implements PostCardListModel {
    private readonly dataService: PostDataService;
    private readonly storeService: PostStoreService;

    constructor (deps: Dependencies) {
        this.dataService = deps.dataService;
        this.storeService = deps.storeService;
    }

    async refreshCardList (): Promise<void> {
        const postCardList = await this.dataService.getPostCardList();
        this.storeService.saveModel(postCardList);
    }

    getCardList (): PostCard[] {
        const postCardList = this.storeService.readModel();
        return postCardList;
    }
}
