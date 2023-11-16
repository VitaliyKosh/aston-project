import { useEffect } from 'react';
import { useApp } from './use-app';

export function useAuth (): void {
    const app = useApp();

    useEffect(() => {
        // TODO проверка токена
        void app.user.signedIn('1234', '123');
    }, []);
};
