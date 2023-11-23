import c from './comparison-title.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';

interface Props {
    className?: string
    title: string
}

export const ComparisonTitle: RC<Props> = ({ className, title }) => {
    return <td className={classNames([c.comparisonTitle, className])}>{title}</td>;
};
