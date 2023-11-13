import { type AppStore } from 'shared/store/store';
import { PostStoreApiRepository } from '../../repositories/post-card-list/store-api';
import { PostCardListStoreApiService } from '../../services/post-card-list';
import { PostCardList } from './post-card-list';

export const createPostCardListComposition = (store: AppStore): PostCardList => {
    const postStoreRepository = new PostStoreApiRepository(store);
    const postStoreService = new PostCardListStoreApiService(postStoreRepository);

    return new PostCardList({
        storeService: postStoreService
    });
};
