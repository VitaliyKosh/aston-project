import { Loader } from 'shared/ui/loader/loader';
import c from './page-loader.module.scss';
import { type RC } from 'shared/types/component';
import { classNames } from 'shared/lib/class-names';

interface PageLoaderProps {
    className?: string
}

export const PageLoader: RC<PageLoaderProps> = ({ className }) => {
    return (
        <div
            className={classNames([c.pageLoader, className])}
        >
            <Loader/>
        </div>
    );
};
