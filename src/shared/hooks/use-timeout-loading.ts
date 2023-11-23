import { type Dispatch, type SetStateAction, useState, useEffect } from 'react';

interface ReturnType {
    isTimeoutLoading: boolean
    setIsRealLoading: Dispatch<SetStateAction<boolean>>
}

export const useTimeoutLoading = (timeout: number): ReturnType => {
    const [isRealLoading, setIsRealLoading] = useState<boolean>(false);
    const [isTimeoutLoading, setIsTimeoutLoading] = useState<boolean>(false);
    const [isEndTimeout, setIsEndTimeout] = useState<boolean>(false);

    const startTimeoutLoading = (): void => {
        setIsTimeoutLoading(true);
        setTimeout(() => {
            setIsEndTimeout(true);
        }, timeout);
    };

    useEffect(() => {
        if (isRealLoading) {
            startTimeoutLoading();
        }
    }, [isRealLoading]);

    useEffect(() => {
        if (!isRealLoading && isEndTimeout) {
            setIsTimeoutLoading(false);
            setIsEndTimeout(false);
        }
    }, [isEndTimeout, isRealLoading]);

    return { isTimeoutLoading, setIsRealLoading };
};
