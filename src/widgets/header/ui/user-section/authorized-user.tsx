import c from './authorized-user.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';
import { Button } from 'shared/ui/button/button';
import { Link } from 'react-router-dom';
import { privateRoutePaths } from 'app/providers/app-router';
import { getApp } from 'shared/helpers/get-app';

export const AuthorizedUser: RC = () => {
    const handleExitClick = (): void => {
        void getApp().user.signedOut();
    };

    return (
        <div className={classNames([c.authorizedUser])}>
            <Link to={privateRoutePaths.FAVORITES}>
                <Button
                    theme='clear'
                    size='s'
                >
                    Избранное
                </Button>
            </Link>
            <Link
                to={privateRoutePaths.HISTORY}
            >
                <Button
                    theme='clear'
                    size='s'
                >
                    История
                </Button>
            </Link>
            <Button
                theme='clear'
                size='s'
                onClick={handleExitClick}
                className={c.logOutButton}
            >
                Выйти
            </Button>
        </div>
    );
};
