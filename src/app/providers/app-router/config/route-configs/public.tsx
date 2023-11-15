import { MainPage } from 'pages/main-page';
import type { RouteConfig, RoutePaths, RouteTitles } from '../types';
import { createRoutePropsFabric } from '../route-config';

export enum PublicAppRoutes {
    MAIN = 'MAIN',
}

const publicRoutePaths: RoutePaths<PublicAppRoutes> = {
    [PublicAppRoutes.MAIN]: '/main'
};

const publicRouteTitles: RouteTitles<PublicAppRoutes> = {
    [PublicAppRoutes.MAIN]: 'Главная страница'
};

const routePropsFabric = createRoutePropsFabric<PublicAppRoutes>(
    publicRouteTitles,
    publicRoutePaths
);

export const publicRouteConfig: RouteConfig<PublicAppRoutes> = {
    [PublicAppRoutes.MAIN]: routePropsFabric(PublicAppRoutes.MAIN, <MainPage/>)
};
