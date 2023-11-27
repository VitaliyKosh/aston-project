import { lazy } from 'react';

export const HistoryPageAsync = lazy(async () => await import('./history-page'));
