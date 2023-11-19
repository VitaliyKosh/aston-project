import { MainPage } from 'pages/main-page';
import type { RouteConfig, RoutePaths, RouteTitles } from '../types';
import { createRoutePropsFabric } from '../route-config';
import { AuthPage } from 'pages/auth-page';

export enum PublicAppRoutes {
    MAIN = 'MAIN',
    SIGN_IN = 'SIGN_IN',
    SIGN_UP = 'SIGN_UP',
}

export const publicRoutePaths: RoutePaths<PublicAppRoutes> = {
    [PublicAppRoutes.MAIN]: '/',
    [PublicAppRoutes.SIGN_IN]: '/signin',
    [PublicAppRoutes.SIGN_UP]: '/signup'
};

const publicRouteTitles: RouteTitles<PublicAppRoutes> = {
    [PublicAppRoutes.MAIN]: 'Главная страница',
    [PublicAppRoutes.SIGN_IN]: 'Вход',
    [PublicAppRoutes.SIGN_UP]: 'Регистрация'
};

const routePropsFabric = createRoutePropsFabric<PublicAppRoutes>(
    publicRouteTitles,
    publicRoutePaths
);

export const publicRouteConfig: RouteConfig<PublicAppRoutes> = {
    [PublicAppRoutes.MAIN]: routePropsFabric(PublicAppRoutes.MAIN, <MainPage/>),
    [PublicAppRoutes.SIGN_IN]: routePropsFabric(PublicAppRoutes.SIGN_IN, <AuthPage type='signIn'/>),
    [PublicAppRoutes.SIGN_UP]: routePropsFabric(PublicAppRoutes.SIGN_UP, <AuthPage type='signUp'/>)
};
