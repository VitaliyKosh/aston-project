import { type PostCard } from '../../models/post-card-list';
import { type PostStoreRepository } from '../../repositories/post-card-list/store';

export class PostCardListStoreService {
    readonly storeRepository: PostStoreRepository;

    constructor (storeRepository: PostStoreRepository) {
        this.storeRepository = storeRepository;
    }

    public readModel (): PostCard[] {
        return this.storeRepository.readModel();
    }

    public saveModel (postCardList: PostCard[]): void {
        this.storeRepository.saveModel(postCardList);
    }
}
