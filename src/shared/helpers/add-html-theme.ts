import { type Theme } from 'shared/types/theme';

export const addHTMLTheme = (newTheme: Theme): void => {
    document.querySelector('html')?.classList.add(newTheme);
};
