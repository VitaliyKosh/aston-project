import { getApp } from 'shared/helpers/get-app';
import c from './title-cell.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';
import { Button } from 'shared/ui/button/button';
import { useFavoriteRows } from 'widgets/comparison-list/providers/favorite-list-provider';

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
            <div>{value}</div>
            <Button
                size='s'
                onClick={handleRemoveClick}
            >
                Удалить
            </Button>
        </div>
    );
};
