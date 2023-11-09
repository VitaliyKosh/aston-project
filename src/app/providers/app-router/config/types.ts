import type { PathRouteProps } from 'react-router-dom';
import { type ReactNode } from 'react';

export type RouteProps = PathRouteProps & {
    title: string
    element: ReactNode
};

export type RoutePaths<T extends string> = Record<T, string>;
export type RouteTitles<T extends string> = Record<T, string>;
export type RouteConfig<T extends string = string> = Record<T, RouteProps>;
