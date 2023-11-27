export interface FeatureFlags {
    isTelegramShareEnabled: boolean
}

export interface FeatureFlagsModel {
    getFeatureFlags: () => Promise<FeatureFlags>
}
