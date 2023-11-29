import { SearchHistoryApiService } from 'services/search-history';
import { SearchHistoryFeature } from './search-history';
import { type LSApi } from 'repositories/local-storage/ls-api';
import { SearchHistoryLSApiRepository } from 'repositories/search-history';
import { FirebaseApi } from 'repositories/firebase/firebase-api';
import { SearchHistoryFirebaseApiRepository } from 'repositories/search-history/firebase-api/api';

interface Dependencies {
    api: LSApi | FirebaseApi
};

export const createSearchHistoryComposition = (deps: Dependencies): SearchHistoryFeature => {
    let apiRepository;

    if (deps.api instanceof FirebaseApi) {
        apiRepository = new SearchHistoryFirebaseApiRepository(deps.api);
    } else {
        apiRepository = new SearchHistoryLSApiRepository(deps.api);
    }

    const apiService = new SearchHistoryApiService(apiRepository);

    return new SearchHistoryFeature({
        apiService
    });
};
