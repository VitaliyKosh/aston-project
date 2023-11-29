import { getApp } from 'shared/helpers/get-app';
import c from './title-cell.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';
import { Button } from 'shared/ui/button/button';
import { useFavoriteRows } from 'widgets/comparison-list/providers/favorite-list-provider';
import { Link } from 'react-router-dom';
import { publicRoutePaths } from 'app/providers/app-router';
import { getLocationWithParams } from 'shared/helpers/get-location';

interface Props {
    className?: string
    id: string
    value: string | undefined
}

export const TitleCell: RC<Props> = ({ className, value, id }) => {
    const app = getApp();
    const { removeItem } = useFavoriteRows();

    const handleRemoveClick = (): void => {
        void app.favorites.favoriteRemoved(id);
        removeItem(id);
    };

    return (
        <div className={classNames([c.titleCell, className])}>
            <Link
                className={c.title}
                to={getLocationWithParams(publicRoutePaths.POST, { id })}
            >
                {value}
            </Link>
            <Button
                size='s'
                onClick={handleRemoveClick}
            >
                Удалить
            </Button>
        </div>
    );
};
