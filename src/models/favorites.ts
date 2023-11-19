export type FavoriteItem = string;
export type Favorites = FavoriteItem[];

export interface FavoritesModel {
    favoriteAdded: (id: FavoriteItem) => Promise<void>
    favoriteRemoved: (id: FavoriteItem) => Promise<void>
    readFavorites: () => Promise<Favorites>
};
