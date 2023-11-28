import 'app/styles/index.scss';
import { type RC } from 'shared/types/component';
import { Suspense } from 'react';
import { PageLoader } from 'widgets/page-loader';
import { GlobalAppRouter } from '../../providers/app-router';
import { Provider } from 'react-redux';
import { useAuth } from 'shared/hooks/use-auth';
import { BrowserRouter } from 'react-router-dom';
import { Header } from 'widgets/header';
import { HelmetProvider } from 'react-helmet-async';
import { getApp } from 'shared/helpers/get-app';
import { ThemeProvider } from 'app/providers/theme-provider';
import { FeatureFlagsProvider } from '../../providers/feature-flags-provider';

export const App: RC = () => {
    const app = getApp();
    useAuth();

    return (
        <div className={'app'}>
            <HelmetProvider>
                <Provider store={app.getReduxStore()}>
                    <ThemeProvider>
                        <FeatureFlagsProvider>
                            <BrowserRouter>
                                <Header />
                                <Suspense fallback={<PageLoader />}>
                                    <GlobalAppRouter fallback={<PageLoader />} />
                                </Suspense>
                            </BrowserRouter>
                        </FeatureFlagsProvider>
                    </ThemeProvider>
                </Provider>
            </HelmetProvider>
        </div>
    );
};
