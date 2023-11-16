import { type Theme } from 'shared/types/theme';

export const toggleHTMLTheme = (oldTheme: Theme, newTheme: Theme): void => {
    document.querySelector('html')?.classList.remove(oldTheme);
    document.querySelector('html')?.classList.add(newTheme);
};
