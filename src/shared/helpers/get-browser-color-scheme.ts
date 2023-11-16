import { Theme } from 'shared/types/theme';

export const getBrowserColorScheme = (): Theme => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.Dark : Theme.Light;
};
