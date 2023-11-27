import { useContext } from 'react';
import { type FeatureFlags } from 'shared/models/feature-flags';
import { FeatureFlagsContext } from './feature-flags-context';

export const useFeatureFlags = (): FeatureFlags => useContext(FeatureFlagsContext);
