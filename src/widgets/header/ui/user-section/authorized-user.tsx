import c from './authorized-user.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { Link } from 'react-router-dom';
import { privateRoutePaths } from 'app/providers/app-router';
import { getApp } from 'shared/helpers/get-app';

export const AuthorizedUser: RC = () => {
    const handlerExitClick = (): void => {
        void getApp().user.signedOut();
    };

    return (
        <div className={classNames([c.authorizedUser])}>
            <Link to={privateRoutePaths.FAVORITES}>
                <FontAwesomeIcon size='xs' icon={faHeart}/>
            </Link>
            <Button
                theme={ButtonTheme.Clear}
                onClick={handlerExitClick}
            >
                Выйти
            </Button>
        </div>
    );
};