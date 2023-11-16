import { type ReactNode, useMemo, useState } from 'react';
import { ThemeContext } from '../lib/theme-context';
import { type RC } from 'shared/types/component';
import { getInitialColorScheme } from 'shared/helpers/get-initial-color-scheme';
import { type Theme } from 'shared/types/theme';

interface Props {
    children: ReactNode
}

export const ThemeProvider: RC<Props> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const initialTheme = getInitialColorScheme();
        document.querySelector('html')?.classList.add(initialTheme);
        return initialTheme;
    });

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
