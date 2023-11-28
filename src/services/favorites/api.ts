import { type FavoriteItem, type Favorites } from 'shared/models/favorites';
import { type FavoritesApiRepository } from 'repositories/favorites';
import { ApiService } from 'services/types';

export class FavoritesApiService extends ApiService {
    apiRepository: FavoritesApiRepository;

    constructor (apiRepository: FavoritesApiRepository) {
        super();
        this.apiRepository = apiRepository;
    }

    public async favoriteAdded (item: FavoriteItem): Promise<void> {
        this.apiRepository.favoriteAdded(item);
    }

    public async favoriteRemoved (item: FavoriteItem): Promise<void> {
        this.apiRepository.favoriteRemoved(item);
    }

    public async readFavorites (): Promise<Favorites> {
        return await this.apiRepository.readFavorites();
    }
}
