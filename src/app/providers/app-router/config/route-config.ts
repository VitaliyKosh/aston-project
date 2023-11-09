import { type ReactNode } from 'react';
import { type RouteProps, type RoutePaths, type RouteTitles } from './types';

type CreateRouteProps<R extends string> = (
    route: R,
    element: ReactNode,
) => RouteProps;

export const createRoutePropsFabric = <R extends string>(
    routeTitles: RouteTitles<R>,
    routePath: RoutePaths<R>
): CreateRouteProps<R> => {
    return (route: R, element: ReactNode) => ({
        title: routeTitles[route],
        path: routePath[route],
        element
    });
};
