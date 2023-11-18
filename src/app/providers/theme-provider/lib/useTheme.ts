import { useContext } from 'react';
import { ThemeContext } from './theme-context';
import { LOCAL_STORAGE_THEME_KEY, Theme } from 'shared/types/theme';
import { toggleHTMLTheme } from 'shared/helpers/toggle-html-theme';

interface UseThemeResult {
    theme: Theme
    toggleTheme: () => void
}

export function useTheme (): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (): void => {
        const oldTheme = theme;
        const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;

        toggleHTMLTheme(oldTheme, newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);

        setTheme(newTheme);
    };

    return { theme, toggleTheme };
}
