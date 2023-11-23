import c from './specifications-cell.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';

interface Props {
    className?: string
    value: string | undefined
}

export const SpecificationCell: RC<Props> = ({ className, value }) => {
    return (
        <div className={classNames([c.specificationsCell, className])}>
            {value}
        </div>
    );
};
