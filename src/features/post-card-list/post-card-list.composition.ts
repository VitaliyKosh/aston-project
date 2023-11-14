import { PostStoreApiRepository } from '../../repositories/post-card-list/store-api';
import { PostCardListStoreApiService } from '../../services/post-card-list';
import { PostCardListFeature } from './post-card-list';
import { type ReduxStoreApi } from 'repositories/redux';

interface Dependencies {
    storeApi: ReduxStoreApi
};

export const createPostCardListComposition = (deps: Dependencies): PostCardListFeature => {
    const storeApiRepository = new PostStoreApiRepository(deps.storeApi);
    const storeApiService = new PostCardListStoreApiService(storeApiRepository);

    return new PostCardListFeature({
        storeApiService
    });
};
