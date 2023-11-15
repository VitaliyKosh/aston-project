import { MainPage } from 'pages/main-page';
import type { RoutePaths, RouteProps, RouteTitles } from '../types';
import { createRoutePropsFabric } from '../route-config';

export enum PrivateAppRoutes {
    MAIN = 'MAIN',
}

const privateRoutePaths: RoutePaths<PrivateAppRoutes> = {
    [PrivateAppRoutes.MAIN]: '/'
};

const privateRouteTitles: RouteTitles<PrivateAppRoutes> = {
    [PrivateAppRoutes.MAIN]: 'Главная страница'
};

const routePropsFabric = createRoutePropsFabric<PrivateAppRoutes>(
    privateRouteTitles,
    privateRoutePaths
);

export const privateRouteConfig: Record<PrivateAppRoutes, RouteProps> = {
    [PrivateAppRoutes.MAIN]: routePropsFabric(PrivateAppRoutes.MAIN, <MainPage />)
};
