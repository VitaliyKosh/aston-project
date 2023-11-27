import {
    type PostDescription,
    type PostImg,
    type PostTitle
} from 'shared/models/post';
import c from './post-card.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as favoriteIcon } from '@fortawesome/free-solid-svg-icons';
import { faHeart as notFavoriteIcon } from '@fortawesome/free-regular-svg-icons';
import { Button } from '../button/button';
import { getApp } from 'shared/helpers/get-app';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { publicRoutePaths } from 'app/providers/app-router/config/route-configs';
import { getLocationWithParams } from 'shared/helpers/get-location';
import { useFeatureFlags } from 'app/providers/feature-flags-provider';
import { TelegramWidget } from '../telegram-widget/telegram-widget';

interface Props {
    className?: string
    id: string
    title: PostTitle
    img?: PostImg
    description?: PostDescription
    isFavorite: boolean
    isAuth: boolean
}

export const PostCard: RC<Props> = ({
    id,
    className,
    title,
    img,
    description,
    isFavorite,
    isAuth
}) => {
    const app = getApp();
    const { isTelegramShareEnabled } = useFeatureFlags();

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

    useEffect(() => {
        setFavoriteLocal(isFavorite);
    }, [isFavorite]);

    return (
        <div className={classNames([c.postCard, className])}>
            <div className={c.titleWrapper}>
                <Link
                    to={getLocationWithParams(publicRoutePaths.POST, { id })}
                >
                    <div className={c.title}>{title}</div>
                </Link>
                <div
                    className={c.widgets}
                >
                    {isTelegramShareEnabled && <TelegramWidget id={id} text={title}/>}
                    {isAuth && (
                        <Button
                            theme="clear"
                            onClick={handleFavoriteToggleClick}
                            className={c.favoriteButton}
                        >
                            {favoriteLocal
                                ? (<FontAwesomeIcon icon={favoriteIcon} />)
                                : (<FontAwesomeIcon icon={notFavoriteIcon} />)}
                        </Button>
                    )}
                </div>
            </div>
            <div className={c.imgDescriptionWrapper}>
                <Link
                    className={c.imgWrapper}
                    to={getLocationWithParams(publicRoutePaths.POST, { id })}
                >
                    <img src={img} placeholder={title} className={c.img} />
                </Link>
                <div>
                    <div className={c.description}>{description}</div>
                </div>
            </div>
        </div>
    );
};
