import { getApp } from 'shared/helpers/get-app';
import { type RC } from 'shared/types/component';
import { PageTitle } from 'shared/ui/page-title/page-title';
import { useEffect, useState } from 'react';
import { type Post } from 'shared/models/post';
import { FavoriteList } from 'widgets/comparison-list';
import { PageLoader } from 'widgets/page-loader';

export const FavoritesPage: RC = () => {
    const app = getApp();
    const [favoritePosts, setFavoritePosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getFavorites = async (): Promise<void> => {
        try {
            setIsLoading(true);

            const favorites = await app.favorites.readFavorites();
            const favoritePosts = await Promise.all(
                favorites.map(async (favorite) => {
                    return await app.post.getPost(favorite);
                })
            );

            setFavoritePosts(favoritePosts);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        void getFavorites();
    }, []);

    // TODO loader

    return (
        <div>
            <PageTitle>Избранное</PageTitle>
            {isLoading
                ? <PageLoader/>
                : (
                    <FavoriteList
                        favoritePosts={favoritePosts}
                        setFavoritePosts={setFavoritePosts}
                    />
                )
            }
        </div>
    );
};
