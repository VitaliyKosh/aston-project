import { publicRoutePaths } from 'app/providers/app-router';
import c from './unauthorized-user.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';
import { LinkButton } from 'widgets/link-button';

export const UnauthorizedUser: RC = () => {
    return (
        <div className={classNames([c.unauthorizedUser])}>
            <LinkButton
                theme='clear'
                size='s'
                to={publicRoutePaths.SIGN_IN}
            >
                Войти
            </LinkButton>
            <LinkButton
                theme='default'
                size='s'
                to={publicRoutePaths.SIGN_UP}
            >
                Регистрация
            </LinkButton>
        </div>
    );
};
