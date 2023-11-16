import c from './unauthorized-user.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';
import { ButtonTheme } from 'shared/ui/button/button';
import { LinkButton } from 'widgets/link-button';

export const UnauthorizedUser: RC = () => {
    return (
        <div className={classNames([c.unauthorizedUser])}>
            <LinkButton
                theme={ButtonTheme.Clear}
                // TODO link
                to={''}
            >
                Войти
            </LinkButton>
            <LinkButton
                theme={ButtonTheme.Clear}
                // TODO link
                to={''}
            >
                Регистрация
            </LinkButton>
        </div>
    );
};
