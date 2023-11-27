import { type FeatureFlagsApiRepository } from 'repositories/feature-flags';
import { ApiService } from 'services/types';
import { type FeatureFlags } from 'shared/models/feature-flags';

export class FeatureFlagsApiService extends ApiService {
    apiRepository: FeatureFlagsApiRepository;

    constructor (apiRepository: FeatureFlagsApiRepository) {
        super();
        this.apiRepository = apiRepository;
    }

    public async getFeatureFlags (): Promise<FeatureFlags> {
        return await this.apiRepository.getFeatureFlags();
    }
}
