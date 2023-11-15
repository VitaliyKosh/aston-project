import './styles/index.scss';
import { type RC } from 'shared/types/component';
import { Suspense } from 'react';
import { PageLoader } from 'widgets/page-loader';
import { GlobalAppRouter } from './providers/app-router';
import { Provider } from 'react-redux';
import { useApp } from 'shared/hooks/use-app';
import { useAuth } from 'shared/hooks/use-auth';

export const App: RC = () => {
    const app = useApp();
    useAuth();

    return (
        <Provider store={app.getReduxStore()}>
            <Suspense fallback={<PageLoader />}>
                <GlobalAppRouter />
            </Suspense>
        </Provider>
    );
};
