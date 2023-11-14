import { type AppStore } from 'repositories/store';
import { PostStoreApiRepository } from '../../repositories/post-card-list/store-api';
import { PostCardListStoreApiService } from '../../services/post-card-list';
import { PostCardList } from './post-card-list';

export const createPostCardListComposition = (store: AppStore): PostCardList => {
    const postStoreApiRepository = new PostStoreApiRepository(store);
    const postStoreApiService = new PostCardListStoreApiService(postStoreApiRepository);

    return new PostCardList({
        storeApiService: postStoreApiService
    });
};
