import { MainPage } from 'pages/main-page';
import type { RoutePaths, RouteProps, RouteTitles } from '../types';

export enum PrivateAppRoutes {
    MAIN = 'MAIN',
}

const privateRoutePaths: RoutePaths<PrivateAppRoutes> = {
    [PrivateAppRoutes.MAIN]: '/'
};

const privateRouteTitles: RouteTitles<PrivateAppRoutes> = {
    [PrivateAppRoutes.MAIN]: 'Главная страница'
};

export const privateRouteConfig: Record<PrivateAppRoutes, RouteProps> = {
    [PrivateAppRoutes.MAIN]: {
        path: privateRoutePaths.MAIN,
        title: privateRouteTitles.MAIN,
        element: MainPage()
    }
};
