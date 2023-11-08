import type { PathRouteProps } from 'react-router-dom';

export type RouteProps = PathRouteProps & {
    title: string
};

export type RouteConfig = Record<string, RouteProps>;
