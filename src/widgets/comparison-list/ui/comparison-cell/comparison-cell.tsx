import c from './comparison-cell.module.scss';
import { type RC } from 'shared/types/component';
import { ImageCell } from '../image-cell/image-cell';
import { SpecificationCell } from '../specifications-cell/specifications-cell';
import { type Cell } from 'widgets/comparison-list/types/types';
import { TitleCell } from '../title-cell/title-cell';

interface Props {
    className?: string
    cell: Cell
}

export const ComparisonCell: RC<Props> = ({ cell, className }) => {
    let cellChild;

    switch (cell.key) {
        case 'img':
            cellChild = <ImageCell src={cell.value} alt={cell.key} />;
            break;
        case 'title':
            cellChild = <TitleCell value={cell.value} id={cell.id} />;
            break;
        default:
            cellChild = <SpecificationCell value={cell.value} />;
    }

    return <td className={className}>
        <div className={c.cellWrapper}>{cellChild}</div>
    </td>;
};
