import { FeatureFlagsApiService } from 'services/feature-flags';
import { FeatureFlagsFeature } from './feature-flags';
import { FeatureFlagsFetchApiRepository } from 'repositories/feature-flags';
import { type FetchApi } from 'shared/lib/network/api-libraries/fetch';

interface Dependencies {
    api: FetchApi
};

export const createFeatureFlagsComposition = (deps: Dependencies): FeatureFlagsFeature => {
    const apiRepository = new FeatureFlagsFetchApiRepository(deps.api);
    const apiService = new FeatureFlagsApiService(apiRepository);

    return new FeatureFlagsFeature({
        apiService
    });
};
