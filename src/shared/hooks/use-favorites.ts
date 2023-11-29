import { useEffect, useState } from 'react';
import { useObservableState } from 'repositories/redux/hooks/use-observable-state';
import { getApp } from 'shared/helpers/get-app';
import { type Favorites } from 'shared/models/favorites';
import { AuthStatus } from 'shared/models/user';

interface useFavoritesResult {
    favorites: Favorites
    isFavoritesLoading: boolean
};

export const useFavorites = (): useFavoritesResult => {
    const app = getApp();
    const authStatus = useObservableState(() => app.user.getAuthStatus());
    const [favorites, setFavorites] = useState<Favorites>([]);
    const [isFavoritesLoading, setIsFavoritesLoading] = useState<boolean>(false);

    const readFavorites = async (): Promise<void> => {
        setIsFavoritesLoading(true);
        const favoritesData = await app.favorites.readFavorites();
        setFavorites(favoritesData);
        setIsFavoritesLoading(false);
    };

    useEffect(() => {
        if (authStatus === AuthStatus.SignedIn) {
            void readFavorites();
        }
    }, [authStatus]);

    return {
        favorites, isFavoritesLoading
    };
};
