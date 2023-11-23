import { getSafeError } from 'shared/lib/app-error/app-error';
import { type FavoritesApiRepository } from '../types';
import { LSApiRepository } from 'repositories/local-storage/ls-api';
import { type Favorites, type FavoriteItem } from 'shared/models/favorites';

export class FavoritesLSApiRepository extends LSApiRepository implements FavoritesApiRepository {
    favoriteAdded (id: FavoriteItem): void {
        try {
            this.api.favoriteAdded(id);
        } catch (e) {
            throw getSafeError(e);
        }
    }

    favoriteRemoved (id: FavoriteItem): void {
        try {
            this.api.favoriteRemoved(id);
        } catch (e) {
            throw getSafeError(e);
        }
    }

    readFavorites (): Favorites {
        try {
            return this.api.readFavorites();
        } catch (e) {
            throw getSafeError(e);
        }
    }
}
