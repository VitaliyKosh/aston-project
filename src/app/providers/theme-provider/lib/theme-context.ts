import { createContext } from 'react';
import { Theme } from 'shared/types/theme';

export interface ThemeContextValue {
    theme: Theme
    setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextValue>({
    theme: Theme.Light,
    setTheme: () => {}
});
