import { addHTMLTheme } from './add-html-theme';
import { type Theme } from 'shared/types/theme';
import { removeHTMLTheme } from './remove-html-theme';

export const toggleHTMLTheme = (oldTheme: Theme, newTheme: Theme): void => {
    removeHTMLTheme(oldTheme);
    addHTMLTheme(newTheme);
};
