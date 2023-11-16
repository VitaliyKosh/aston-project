import { type RC } from 'shared/types/component';
import { AppRouter } from './app-router';
import { AuthStatus } from 'models/user';
import { useObservableState } from 'repositories/redux/hooks/useTypedSelector';
import { type ReactElement } from 'react';
import { privateRouteConfig, publicRouteConfig } from '../config';
import { getApp } from 'shared/helpers/get-app';

interface Props {
    fallback: ReactElement
}

export const GlobalAppRouter: RC<Props> = ({ fallback }) => {
    const app = getApp();
    const authStatus = useObservableState(() => app.user.getAuthStatus());

    if (authStatus === AuthStatus.Pending) {
        return fallback;
    } else if (authStatus === AuthStatus.SignedIn) {
        return <AppRouter routeConfigs={[privateRouteConfig, publicRouteConfig]}/>;
    } else {
        return <AppRouter routeConfigs={[publicRouteConfig]}/>;
    }
};
