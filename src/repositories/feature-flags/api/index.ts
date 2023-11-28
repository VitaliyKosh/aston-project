import { AppError, FeatureFlagsErrorCodes } from 'shared/lib/app-error/app-error';
import { type FeatureFlags } from 'shared/models/feature-flags';
import { type FeatureFlagsApiRepository } from '../types';
import { FetchApiRepository } from 'repositories/fetch';

export class FeatureFlagsFetchApiRepository extends FetchApiRepository implements FeatureFlagsApiRepository {
    public async getFeatureFlags (): Promise<FeatureFlags> {
        try {
            return await this.api.getJSON<FeatureFlags>({
                url: 'feature-flags'
            });
        } catch (e) {
            throw new AppError(FeatureFlagsErrorCodes.CANNOT_GET);
        }
    }
}
