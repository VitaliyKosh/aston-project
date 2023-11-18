import { LOCAL_STORAGE_THEME_KEY, type Theme } from 'shared/types/theme';
import { getBrowserColorScheme } from './get-browser-color-scheme';

export const getInitialColorScheme = (): Theme => {
    return localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || getBrowserColorScheme();
};
