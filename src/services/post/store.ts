import { type PostCard } from '../../models/post-card-list';
import { type PostStoreRepository } from '../../repositories/post/store';

export class PostStoreService {
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
