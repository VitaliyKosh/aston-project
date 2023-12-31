import { type RC } from 'shared/types/component';
import { AppRouter } from './app-router';
import { AuthStatus } from 'shared/models/user';
import { useObservableState } from 'repositories/redux/hooks/use-observable-state';
import { type ReactElement } from 'react';
import { publicRouteConfig } from '../config/route-configs/public';
import { privateRouteConfig } from '../config/route-configs/private';
import { getApp } from 'shared/helpers/get-app';

interface Props {
    fallback: ReactElement
}

export const GlobalAppRouter: RC<Props> = ({ fallback }) => {
    const app = getApp();
    const authStatus = useObservableState(() => app.user.getAuthStatus());

    switch (authStatus) {
        case AuthStatus.Pending:
            return fallback;
        case AuthStatus.SignedIn:
            return <AppRouter routeConfigs={[privateRouteConfig, publicRouteConfig]} />;
        default:
            return <AppRouter routeConfigs={[publicRouteConfig]} />;
    }
};
