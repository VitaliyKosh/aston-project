import { getSafeError } from 'shared/lib/app-error/app-error';
import { type FavoritesApiRepository } from '../types';
import { FirebaseApiRepository } from 'repositories/firebase/';
import { type Favorites, type FavoriteItem } from 'shared/models/favorites';

export class FavoritesFirebaseApiRepository extends FirebaseApiRepository implements FavoritesApiRepository {
    favoriteAdded (id: FavoriteItem): void {
        try {
            void this.api.favoriteAdded(id);
        } catch (e) {
            throw getSafeError(e);
        }
    }

    favoriteRemoved (id: FavoriteItem): void {
        try {
            void this.api.favoriteRemoved(id);
        } catch (e) {
            throw getSafeError(e);
        }
    }

    async readFavorites (): Promise<Favorites> {
        try {
            return await this.api.readFavorites();
        } catch (e) {
            throw getSafeError(e);
        }
    }
}
