import { getSafeError } from 'shared/lib/app-error/app-error';
import { type SearchHistoryApiRepository } from '../types';
import { LSApiRepository } from 'repositories/local-storage/ls-api';
import { type SearchHistory } from 'shared/models/search-history';

export class SearchHistoryLSApiRepository extends LSApiRepository implements SearchHistoryApiRepository {
    searched (query: string): void {
        try {
            this.api.searched(query);
        } catch (e) {
            throw getSafeError(e);
        }
    }

    searchRemoved (id: string): void {
        try {
            this.api.searchRemoved(id);
        } catch (e) {
            throw getSafeError(e);
        }
    }

    getSearchHistory (): SearchHistory {
        try {
            return this.api.getSearchHistory();
        } catch (e) {
            throw getSafeError(e);
        }
    }
}
