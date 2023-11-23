import c from './page-title.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';

interface Props {
    className?: string
    children: string
}

export const PageTitle: RC<Props> = ({ className, children }) => {
    return (
        <div className={classNames([c.pageTitle, className])}>
            {children}
        </div>
    );
};
