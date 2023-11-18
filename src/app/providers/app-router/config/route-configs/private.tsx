import type { RoutePaths, RouteProps, RouteTitles } from '../types';
import { createRoutePropsFabric } from '../route-config';
import { Favorites } from 'pages/favorites';

export enum PrivateAppRoutes {
    FAVORITES = 'FAVORITES',
}

export const privateRoutePaths: RoutePaths<PrivateAppRoutes> = {
    [PrivateAppRoutes.FAVORITES]: '/favorites'
};

const privateRouteTitles: RouteTitles<PrivateAppRoutes> = {
    [PrivateAppRoutes.FAVORITES]: 'Избранное'
};

const routePropsFabric = createRoutePropsFabric<PrivateAppRoutes>(
    privateRouteTitles,
    privateRoutePaths
);

export const privateRouteConfig: Record<PrivateAppRoutes, RouteProps> = {
    [PrivateAppRoutes.FAVORITES]: routePropsFabric(PrivateAppRoutes.FAVORITES, <Favorites />)
};
