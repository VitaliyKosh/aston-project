import { type ReactNode, useState, useEffect } from 'react';
import { FeatureFlagsContext, featureFlagsDefaultValue } from '../lib/feature-flags-context';
import { type RC } from 'shared/types/component';
import { type FeatureFlags } from 'shared/models/feature-flags';
import { getApp } from 'shared/helpers/get-app';

interface Props {
    children: ReactNode
}

export const FeatureFlagsProvider: RC<Props> = ({ children }) => {
    const app = getApp();
    const [featureFlags, setFeatureFlags] = useState<FeatureFlags>(featureFlagsDefaultValue);

    useEffect(() => {
        void (async () => {
            const featureFlagsResponse = await app.featureFlags.getFeatureFlags();
            setFeatureFlags(featureFlagsResponse);
        })();
    }, []);

    return (
        <FeatureFlagsContext.Provider value={featureFlags}>
            {children}
        </FeatureFlagsContext.Provider>
    );
};
