import { type Theme } from 'shared/types/theme';

export const removeHTMLTheme = (newTheme: Theme): void => {
    document.querySelector('html')?.classList.remove(newTheme);
};
