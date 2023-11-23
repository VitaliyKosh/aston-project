import { type DependencyList, useEffect, useState } from 'react';

export const useRTKAsyncState = <T>(
    getState: () => Promise<T>, initialValue: T, deps: DependencyList
): T => {
    const [value, setValue] = useState<T>(initialValue);

    useEffect(() => {
        setValue(initialValue);
        void (async () => {
            setValue(await getState());
        })();
    }, [...deps]);

    return value;
};
