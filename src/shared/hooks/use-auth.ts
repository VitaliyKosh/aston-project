import { useEffect } from 'react';
import { getApp } from 'shared/helpers/get-app';

export function useAuth (): void {
    const app = getApp();

    useEffect(() => {
        void app.user.authChecked();
    }, []);
};
