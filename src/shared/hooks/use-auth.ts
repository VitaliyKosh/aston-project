import { useEffect } from 'react';
import { getApp } from 'shared/helpers/get-app';

export function useAuth (): void {
    const app = getApp();

    useEffect(() => {
        // TODO проверка токена
        void app.user.signedIn('1234', '123');
    }, []);
};
