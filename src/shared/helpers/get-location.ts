export const getLocationWithParams = (
    base: string,
    params: Record<string, string>,
    queryParams?: Record<string, string>
): string => {
    const locationWithParams = Object.entries(params).reduce((newLocation, [key, param]) => {
        const paramKey = ':' + key;

        if (base.includes(paramKey)) {
            return newLocation.replace(paramKey, param);
        }

        return newLocation;
    }, base);

    if (!queryParams) {
        return locationWithParams;
    }

    const queryParamsEntries = Object.entries(queryParams);

    if (!queryParamsEntries.length) {
        return locationWithParams;
    }

    const queryParamsString = Object.entries(queryParams).reduce<string[]>((newLocation, [key, param]) => {
        return [...newLocation, key + '=' + param];
    }, []).join('&');

    return locationWithParams + '?' + queryParamsString;
};
