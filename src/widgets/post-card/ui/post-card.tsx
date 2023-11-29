import {
    type PostDescription,
    type PostImg,
    type PostTitle
} from 'shared/models/post';
import c from './post-card.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';
import { Link } from 'react-router-dom';
import { publicRoutePaths } from 'app/providers/app-router';
import { getLocationWithParams } from 'shared/helpers/get-location';
import { useFeatureFlags } from 'app/providers/feature-flags-provider';
import { TelegramWidget } from '../../../shared/ui/telegram-widget/telegram-widget';
import { AddToFavorite } from 'widgets/add-to-favorite';

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
    const { isTelegramShareEnabled } = useFeatureFlags();

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
                    {isAuth && <AddToFavorite isFavorite={isFavorite} id={id}/>}
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
