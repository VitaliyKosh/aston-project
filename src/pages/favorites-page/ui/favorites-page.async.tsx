import { lazy } from 'react';

export const FavoritesPageAsync = lazy(async () => await import('./favorites-page'));
