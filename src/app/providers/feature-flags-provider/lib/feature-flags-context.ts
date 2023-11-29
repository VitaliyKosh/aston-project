import { createContext } from 'react';
import { type FeatureFlags } from 'shared/models/feature-flags';

export type FeatureFlagsContextValue = FeatureFlags;

export const featureFlagsDefaultValue = { isTelegramShareEnabled: false };
export const FeatureFlagsContext = createContext<FeatureFlagsContextValue>(featureFlagsDefaultValue);
