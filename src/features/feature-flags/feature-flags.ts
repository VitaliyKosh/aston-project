import { type FeatureFlags, type FeatureFlagsModel } from 'shared/models/feature-flags';
import { type FeatureFlagsApiService } from 'services/feature-flags';

export interface Dependencies {
    apiService: FeatureFlagsApiService
};

export class FeatureFlagsFeature implements FeatureFlagsModel {
    readonly #apiService: FeatureFlagsApiService;

    constructor (deps: Dependencies) {
        this.#apiService = deps.apiService;
    }

    async getFeatureFlags (): Promise<FeatureFlags> {
        return await this.#apiService.getFeatureFlags();
    }
}
