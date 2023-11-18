import { AppError, BaseErrorCodes } from 'repositories/error';
import { type FavoritesApiRepository } from '../types';
import { LSApiRepository } from 'repositories/local-storage/ls-api';
import { type Favorites, type FavoriteItem } from 'models/favorites';

export class FavoritesLSApiRepository extends LSApiRepository implements FavoritesApiRepository {
    favoriteAdded (id: FavoriteItem): void {
        try {
            this.api.favoriteAdded(id);
        } catch (e) {
            if (e instanceof AppError) {
                throw e;
            } else {
                throw new AppError(BaseErrorCodes.UNKNOWN_ERROR);
            }
        }
    }

    favoriteRemoved (id: FavoriteItem): void {
        try {
            this.api.favoriteRemoved(id);
        } catch (e) {
            if (e instanceof AppError) {
                throw e;
            } else {
                throw new AppError(BaseErrorCodes.UNKNOWN_ERROR);
            }
        }
    }

    readFavorites (): Favorites {
        try {
            return this.api.readFavorites();
        } catch (e) {
            if (e instanceof AppError) {
                throw e;
            } else {
                throw new AppError(BaseErrorCodes.UNKNOWN_ERROR);
            }
        }
    }
}
