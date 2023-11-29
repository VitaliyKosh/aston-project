import { Button } from 'shared/ui/button/button';
import c from './page-error.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';

interface Props {
    info: string
}

export const PageError: RC<Props> = ({ info }) => {
    const reloadPage = (): void => {
        location.reload();
    };

    return (
        <div
            className={classNames([c.pageError])}
        >
            <p>400 ☹️</p>
            <p>{info}</p>
            <Button onClick={reloadPage}>Обновить</Button>
        </div>
    );
};
