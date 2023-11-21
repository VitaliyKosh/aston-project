import { type Post } from 'models/post';
import type React from 'react';
import { createContext } from 'react';

export interface FavoriteListContextValue {
    favoritePosts: Post[]
    setFavoritePosts: React.Dispatch<React.SetStateAction<Post[]>>
}

export const FavoriteListContext = createContext<FavoriteListContextValue>({
    favoritePosts: [],
    setFavoritePosts: () => {}
});
