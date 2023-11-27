import { type SearchHistory } from 'shared/models/search-history';
import { type SearchHistoryApiRepository } from 'repositories/search-history';
import { ApiService } from 'services/types';

export class SearchHistoryApiService extends ApiService {
    apiRepository: SearchHistoryApiRepository;

    constructor (apiRepository: SearchHistoryApiRepository) {
        super();
        this.apiRepository = apiRepository;
    }

    public async searched (query: string): Promise<void> {
        this.apiRepository.searched(query);
    }

    public async searchRemoved (id: string): Promise<void> {
        this.apiRepository.searchRemoved(id);
    }

    public async getSearchHistory (): Promise<SearchHistory> {
        return this.apiRepository.getSearchHistory();
    }
}
