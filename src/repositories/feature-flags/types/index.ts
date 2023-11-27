import { type ApiRepository } from 'repositories/types';
import { type FeatureFlags } from 'shared/models/feature-flags';

export interface FeatureFlagsApiRepository extends ApiRepository {
    getFeatureFlags: () => Promise<FeatureFlags>
};
