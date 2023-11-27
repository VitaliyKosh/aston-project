import { type SearchHistory } from 'shared/models/search-history';
import { type ApiRepository } from 'repositories/types';

export interface SearchHistoryApiRepository extends ApiRepository {
    searched: (query: string) => void
    searchRemoved: (id: string) => void
    getSearchHistory: () => SearchHistory
};
