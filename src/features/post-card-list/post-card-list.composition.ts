import { PostCardListStoreApiRepository } from 'repositories/post-card-list/store-api/store-api';
import { PostCardListStoreApiService } from '../../services/post-card-list';
import { PostCardListFeature } from './post-card-list';
import { type ReduxStoreApi } from 'repositories/redux/redux';

interface Dependencies {
    storeApi: ReduxStoreApi
};

export const createPostCardListComposition = (deps: Dependencies): PostCardListFeature => {
    const storeApiRepository = new PostCardListStoreApiRepository(deps.storeApi);
    const storeApiService = new PostCardListStoreApiService(storeApiRepository);

    return new PostCardListFeature({
        storeApiService
    });
};
