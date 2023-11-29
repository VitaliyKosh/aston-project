import { PostStoreApiService } from 'services/post';
import { PostFeature } from './post';
import { type ReduxStoreApi } from 'repositories/redux/redux';
import { PostStoreApiRepository } from 'repositories/post/store-api/store-api';

interface Dependencies {
    storeApi: ReduxStoreApi
};

export const createPostComposition = (deps: Dependencies): PostFeature => {
    const storeApiRepository = new PostStoreApiRepository(deps.storeApi);
    const storeApiService = new PostStoreApiService(storeApiRepository);

    return new PostFeature({
        storeApiService
    });
};
