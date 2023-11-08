import type { RouteConfig, RouteProps } from './types';

export enum PrivateAppRoutes {
    // MAIN = 'MAIN',
}

export const privateRoutePaths: RouteConfig = {
    // [PrivateAppRoutes.MAIN]: '/',
};

export const privateRouteNames: Record<PrivateAppRoutes, string> = {
    // [PrivateAppRoutes.MAIN]: 'Главная страница',
};

export const privateRouteConfig: Record<PrivateAppRoutes, RouteProps> = {
    // [PrivateAppRoutes.MAIN]: {
    //     path: privateRoutePaths.MAIN,
    //     title: privateRouteNames.MAIN,
    //     showHeader: true,
    //     element: <MainPage />
    // },
};
