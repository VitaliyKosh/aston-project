import c from './post-card-list.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';
import { type PostCard as TPostCard } from 'shared/models/post-card-list';
import { PostCard } from 'shared/ui/post-card/post-card';
import { useEffect, useState } from 'react';
import { getApp } from 'shared/helpers/get-app';
import { type Favorites } from 'shared/models/favorites';

interface Props {
    className?: string
    postCards: TPostCard[]
    isAuth: boolean
}

export const PostCardList: RC<Props> = ({ className, postCards, isAuth }) => {
    const app = getApp();
    const [favorites, setFavorites] = useState<Favorites>([]);
    const [isFavoritesLoading, setIsFavoritesLoading] = useState<boolean>(false);

    const readFavorites = async (): Promise<void> => {
        setIsFavoritesLoading(true);
        const favoritesData = await app.favorites.readFavorites();
        setFavorites(favoritesData);
        setIsFavoritesLoading(false);
    };

    useEffect(() => {
        if (isAuth) {
            void readFavorites();
        }
    }, [isAuth]);

    return (
        <div className={classNames([c.postCardList, className])}>
            {!isFavoritesLoading && postCards.map((card) => {
                return (
                    <PostCard
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        img={card.img}
                        description={card.description}
                        isFavorite={favorites.includes(card.id)}
                        isAuth={isAuth}
                    />
                );
            })}
        </div>
    );
};
