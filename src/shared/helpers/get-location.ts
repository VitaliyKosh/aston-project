export const getLocationWithParams = (base: string, params: Record<string, string>): string => {
    return Object.entries(params).reduce((newLocation, [key, param]) => {
        const paramKey = ':' + key;

        if (base.includes(paramKey)) {
            return newLocation.replace(paramKey, param);
        }

        return newLocation;
    }, base);
};
