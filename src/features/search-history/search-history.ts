import { type SearchHistoryApiService } from 'services/search-history';
import { type SearchHistory, type SearchHistoryModel } from 'shared/models/search-history';

export interface Dependencies {
    apiService: SearchHistoryApiService
};

export class SearchHistoryFeature implements SearchHistoryModel {
    readonly #apiService: SearchHistoryApiService;

    constructor (deps: Dependencies) {
        this.#apiService = deps.apiService;
    }

    async searched (query: string): Promise<void> {
        void this.#apiService.searched(query);
    }

    async searchRemoved (id: string): Promise<void> {
        void this.#apiService.searchRemoved(id);
    }

    async getSearchHistory (): Promise<SearchHistory> {
        return await this.#apiService.getSearchHistory();
    }
}
