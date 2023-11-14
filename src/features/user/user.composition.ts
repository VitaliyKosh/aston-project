import { UserFeature } from './user';
import { UserApiService } from 'services/user';
import { UserFirebaseApiRepository } from 'repositories/user/api/api';
import { UserStoreApiService } from 'services/user/store-api';
import { ReduxUserStoreApiRepository } from 'repositories/user/store-api/store-api';
import { type FirebaseApi } from 'repositories/firebase';
import { type ReduxStoreApi } from 'repositories/redux';

interface Dependencies {
    api: FirebaseApi
    storeApi: ReduxStoreApi
};

export const createUserComposition = (deps: Dependencies): UserFeature => {
    const apiRepository = new UserFirebaseApiRepository(deps.api);
    const apiService = new UserApiService(apiRepository);

    const storeApiRepository = new ReduxUserStoreApiRepository(deps.storeApi);
    const storeApiService = new UserStoreApiService(storeApiRepository);

    return new UserFeature({
        apiService,
        storeApiService
    });
};
