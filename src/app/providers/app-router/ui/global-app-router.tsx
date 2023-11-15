import { type RC } from 'shared/types/component';
import { PartialAppRouter } from './app-router';
import { privateRouteConfig, publicRouteConfig } from '../config';
import { PageLoader } from 'widgets/page-loader';
import { AuthStatus } from 'models/user';
import { useObservableState } from 'repositories/redux/hooks/useTypedSelector';
import { BrowserRouter } from 'react-router-dom';
import { useApp } from 'shared/hooks/use-app';

export const GlobalAppRouter: RC = () => {
    const app = useApp();
    const authStatus = useObservableState(() => app.user.getAuthStatus());

    if (authStatus === AuthStatus.Pending) {
        return <PageLoader />;
    }

    return (
        <BrowserRouter>
            <PartialAppRouter routeConfig={publicRouteConfig} />
            {authStatus === AuthStatus.SignedIn
                ? (
                    <PartialAppRouter routeConfig={privateRouteConfig} />
                )
                : undefined}
        </BrowserRouter>
    );
};
