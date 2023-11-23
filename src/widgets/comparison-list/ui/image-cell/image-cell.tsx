import c from './image-cell.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';

interface Props {
    className?: string
    src: string | undefined
    alt: string
}

export const ImageCell: RC<Props> = ({ className, src, alt }) => {
    return (
        <div
            className={classNames([c.imageCell, className])}
        >
            <img
                className={c.img}
                src={src}
                alt={alt}
            />
        </div>
    );
};
