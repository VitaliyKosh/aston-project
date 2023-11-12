import { type PostCardListDataService, type PostCardListStoreService } from '../../services/post-card-list';
import { type PostCard, type PostCardListModel } from '../../models/post-card-list';

export interface Dependencies {
    dataService: PostCardListDataService
    storeService: PostCardListStoreService
};

export class PostCardList implements PostCardListModel {
    private readonly dataService: PostCardListDataService;
    private readonly storeService: PostCardListStoreService;

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
