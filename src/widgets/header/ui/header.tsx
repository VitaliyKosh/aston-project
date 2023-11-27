import { Logo } from './logo/logo';
import c from './header.module.scss';
import { type RC } from 'shared/types/component';
import { UserSection } from './user-section/user-section';
import { classNames } from 'shared/lib/class-names';
import { Button } from 'shared/ui/button/button';
import { useTheme } from 'app/providers/theme-provider';
import { Link } from 'react-router-dom';
import { publicRoutePaths } from 'app/providers/app-router/config/route-configs';
import { Theme } from 'shared/types/theme';

export const Header: RC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames([c.header])}>
            <div className={classNames([c.headerBG])} />
            <div className={c.headerContent}>
                <Logo />
                <div
                    className={c.centralMenu}
                >
                    <Link
                        to={publicRoutePaths.MAIN}
                    >
                        Главная
                    </Link>
                    <Button
                        theme='clear'
                        onClick={toggleTheme}
                    >
                        {theme === Theme.Light ? 'Тёмная тема' : 'Светлая тема'}
                    </Button>
                </div>
                <UserSection />
            </div>
        </div>
    );
};
