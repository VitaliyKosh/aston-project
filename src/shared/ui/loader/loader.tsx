import { type FC } from 'react';
import c from './loader.module.scss';
import { classNames } from 'shared/lib/class-names';

interface LoaderProps {
    className?: string
}

export const Loader: FC<LoaderProps> = ({ className }) => {
    return (
        <div
            className={classNames([c.loader, className])}
        >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
