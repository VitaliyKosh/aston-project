import { FavoritesApiService } from 'services/favorites';
import { FavoritesFeature } from './favorites';
import { type LSApi } from 'repositories/local-storage/ls-api';
import { FavoritesLSApiRepository } from 'repositories/favorites';
import { FirebaseApi } from 'repositories/firebase';

interface Dependencies {
    api: LSApi | FirebaseApi
};

export const createFavoritesComposition = (deps: Dependencies): FavoritesFeature => {
    if (deps.api instanceof FirebaseApi) {
        // TODO create FavoritesFirebaseApiRepository
        throw new Error('FavoritesFirebaseApiRepository not init');
    }

    const apiRepository = new FavoritesLSApiRepository(deps.api);
    const apiService = new FavoritesApiService(apiRepository);

    return new FavoritesFeature({
        apiService
    });
};
