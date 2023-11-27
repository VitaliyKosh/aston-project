import type { RoutePaths, RouteProps, RouteTitles } from '../types';
import { createRoutePropsFabric } from '../route-config';
import { FavoritesPage } from 'pages/favorites-page';
import { HistoryPage } from 'pages/history-page';

export enum PrivateAppRoutes {
    FAVORITES = 'FAVORITES',
    HISTORY = 'HISTORY'
}

export const privateRoutePaths: RoutePaths<PrivateAppRoutes> = {
    [PrivateAppRoutes.FAVORITES]: '/favorites',
    [PrivateAppRoutes.HISTORY]: '/history'
};

const privateRouteTitles: RouteTitles<PrivateAppRoutes> = {
    [PrivateAppRoutes.FAVORITES]: 'Избранное',
    [PrivateAppRoutes.HISTORY]: 'История поиска'
};

const routePropsFabric = createRoutePropsFabric<PrivateAppRoutes>(
    privateRouteTitles,
    privateRoutePaths
);

export const privateRouteConfig: Record<PrivateAppRoutes, RouteProps> = {
    [PrivateAppRoutes.FAVORITES]: routePropsFabric(PrivateAppRoutes.FAVORITES, <FavoritesPage />),
    [PrivateAppRoutes.HISTORY]: routePropsFabric(PrivateAppRoutes.HISTORY, <HistoryPage />)

};
