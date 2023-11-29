import { type RC } from 'shared/types/component';

interface Props {
    className?: string
    title: string
}

export const ComparisonTitle: RC<Props> = ({ className, title }) => {
    return <td className={className}>{title}</td>;
};
