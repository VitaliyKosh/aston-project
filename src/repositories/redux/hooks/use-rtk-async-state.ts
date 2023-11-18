import { useEffect, useState } from 'react';

export const useRTKAsyncState = <T>(getState: () => Promise<T>, initialValue: T): T => {
    const [value, setValue] = useState<T>(initialValue);

    useEffect(() => {
        void (async () => {
            setValue(await getState());
        })();
    }, []);

    return value;
};
