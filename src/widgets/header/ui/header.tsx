import { Logo } from './logo/logo';
import c from './header.module.scss';
import { type RC } from 'shared/types/component';
import { UserSection } from './user-section/user-section';
import { classNames } from 'shared/lib/class-names';
import { Button } from 'shared/ui/button/button';
import { useTheme } from 'app/providers/theme-provider';
import { Theme } from 'shared/types/theme';
import { useObservableState } from 'repositories/redux/hooks/use-observable-state';
import { getApp } from 'shared/helpers/get-app';
import { AuthStatus } from 'shared/models/user';

export const Header: RC = () => {
    const app = getApp();

    const { theme, toggleTheme } = useTheme();
    const authStatus = useObservableState(() => app.user.getAuthStatus());

    return (
        <div className={classNames([c.header])}>
            <div className={classNames([c.headerBG])} />
            {authStatus !== AuthStatus.Pending
                ? <div className={c.headerContent}>
                    <Logo />
                    <div
                        className={c.centralMenu}
                    >
                        <Button
                            theme='clear'
                            onClick={toggleTheme}
                        >
                            {theme === Theme.Light ? 'Тёмная тема' : 'Светлая тема'}
                        </Button>
                    </div>
                    <UserSection />
                </div>
                : null
            }
        </div>
    );
};
