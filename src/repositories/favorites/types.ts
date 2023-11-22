import { type FavoriteItem, type Favorites } from 'shared/models/favorites';
import { type ApiRepository } from 'repositories/types';

export interface FavoritesApiRepository extends ApiRepository {
    favoriteAdded: (id: FavoriteItem) => void
    favoriteRemoved: (id: FavoriteItem) => void
    readFavorites: () => Favorites
};
