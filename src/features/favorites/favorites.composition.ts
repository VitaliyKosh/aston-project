import { FavoritesApiService } from 'services/favorites';
import { FavoritesFeature } from './favorites';
import { type LSApi } from 'repositories/local-storage/ls-api';
import { FavoritesLSApiRepository } from 'repositories/favorites';
import { FirebaseApi } from 'repositories/firebase';
import { FavoritesFirebaseApiRepository } from 'repositories/favorites/firebase-api/api';

interface Dependencies {
    api: LSApi | FirebaseApi
};

export const createFavoritesComposition = (deps: Dependencies): FavoritesFeature => {
    let apiRepository;

    if (deps.api instanceof FirebaseApi) {
        apiRepository = new FavoritesFirebaseApiRepository(deps.api);
    } else {
        apiRepository = new FavoritesLSApiRepository(deps.api);
    }

    const apiService = new FavoritesApiService(apiRepository);

    return new FavoritesFeature({
        apiService
    });
};
