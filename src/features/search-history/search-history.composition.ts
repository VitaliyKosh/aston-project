import { SearchHistoryApiService } from 'services/search-history';
import { SearchHistoryFeature } from './search-history';
import { type LSApi } from 'repositories/local-storage/ls-api';
import { SearchHistoryLSApiRepository } from 'repositories/search-history';
import { FirebaseApi } from 'repositories/firebase';

interface Dependencies {
    api: LSApi | FirebaseApi
};

export const createSearchHistoryComposition = (deps: Dependencies): SearchHistoryFeature => {
    if (deps.api instanceof FirebaseApi) {
        // TODO create SearchHistoryFirebaseApiRepository
        throw new Error('SearchHistoryFirebaseApiRepository not init');
    }

    const apiRepository = new SearchHistoryLSApiRepository(deps.api);
    const apiService = new SearchHistoryApiService(apiRepository);

    return new SearchHistoryFeature({
        apiService
    });
};
