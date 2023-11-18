import { type FavoritesApiService } from 'services/favorites';
import { type Favorites, type FavoritesModel } from 'models/favorites';

export interface Dependencies {
    apiService: FavoritesApiService
};

export class FavoritesFeature implements FavoritesModel {
    readonly #apiService: FavoritesApiService;

    constructor (deps: Dependencies) {
        this.#apiService = deps.apiService;
    }

    async favoriteAdded (id: string): Promise<void> {
        void this.#apiService.favoriteAdded(id);
    }

    async favoriteRemoved (id: string): Promise<void> {
        void this.#apiService.favoriteRemoved(id);
    }

    async readFavorites (): Promise<Favorites> {
        return await this.#apiService.readFavorites();
    }
}
