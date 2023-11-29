import c from './post-card-list.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';
import { type PostCard as TPostCard } from 'shared/models/post-card-list';
import { PostCard } from 'widgets/post-card/ui/post-card';
import { useFavorites } from 'shared/hooks/use-favorites';

interface Props {
    className?: string
    postCards: TPostCard[]
    isAuth: boolean
}

export const PostCardList: RC<Props> = ({ className, postCards, isAuth }) => {
    const { favorites, isFavoritesLoading } = useFavorites();

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
