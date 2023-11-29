import { useContext, useMemo } from 'react';
import { FavoriteListContext } from './favorite-list-context';
import { getRows } from 'widgets/comparison-list/lib/get-rows';
import { type Row } from 'widgets/comparison-list/types/types';

interface UseThemeResult {
    rows: Row[]
    removeItem: (id: string) => void
}

export function useFavoriteRows (): UseThemeResult {
    const { favoritePosts, setFavoritePosts } = useContext(FavoriteListContext);
    const rows = useMemo(() => getRows(favoritePosts), [favoritePosts]);

    const removeItem = (id: string): void => {
        setFavoritePosts(posts => posts.filter(p => p.id !== id));
    };

    return { rows, removeItem };
}
