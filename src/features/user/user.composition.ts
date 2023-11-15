import { UserFeature } from './user';
import { UserApiService } from 'services/user';
import { UserFirebaseApiRepository } from 'repositories/user/api/api';
import { UserStoreApiService } from 'services/user/store-api';
import { ReduxUserStoreApiRepository } from 'repositories/user/store-api/api';
import { type FirebaseApi } from 'repositories/firebase';
import { type ReduxStoreApi } from 'repositories/redux';
import { LSApi } from 'repositories/local-storage';
import { UserLSApiRepository } from 'repositories/user';

interface Dependencies {
    api: FirebaseApi | LSApi
    storeApi: ReduxStoreApi
};

export const createUserComposition = (deps: Dependencies): UserFeature => {
    const apiRepository = deps.api instanceof LSApi ? new UserLSApiRepository(deps.api) : new UserFirebaseApiRepository(deps.api);
    const apiService = new UserApiService(apiRepository);

    const storeApiRepository = new ReduxUserStoreApiRepository(deps.storeApi);
    const storeApiService = new UserStoreApiService(storeApiRepository);

    return new UserFeature({
        apiService,
        storeApiService
    });
};
