import { useState } from 'react';
import c from './add-to-favorite.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';
import { Button } from 'shared/ui/button/button';
import { getApp } from 'shared/helpers/get-app';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as favoriteIcon } from '@fortawesome/free-solid-svg-icons';
import { faHeart as notFavoriteIcon } from '@fortawesome/free-regular-svg-icons';

interface Props {
    className?: string
    isFavorite: boolean
    id: string
}

export const AddToFavorite: RC<Props> = ({ className, isFavorite, id }) => {
    const app = getApp();

    const [favoriteLocal, setFavoriteLocal] = useState<boolean>(isFavorite);

    const handleFavoriteToggleClick = (): void => {
        if (favoriteLocal) {
            void app.favorites.favoriteRemoved(id);
            setFavoriteLocal(false);
        } else {
            void app.favorites.favoriteAdded(id);
            setFavoriteLocal(true);
        }
    };

    return (
        <Button
            theme="clear"
            onClick={handleFavoriteToggleClick}
            className={classNames([c.addToFavorite, className])}
        >
            {favoriteLocal
                ? (<FontAwesomeIcon icon={favoriteIcon} />)
                : (<FontAwesomeIcon icon={notFavoriteIcon} />)}
        </Button>
    );
};
