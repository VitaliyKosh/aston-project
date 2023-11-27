import { getSafeError } from 'shared/lib/app-error/app-error';
import { type SearchHistoryApiRepository } from '../types';
import { FirebaseApiRepository } from 'repositories/firebase';
import { type SearchHistory } from 'shared/models/search-history';

export class SearchHistoryFirebaseApiRepository extends FirebaseApiRepository implements SearchHistoryApiRepository {
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

    async getSearchHistory (): Promise<SearchHistory> {
        try {
            return await this.api.getSearchHistory();
        } catch (e) {
            throw getSafeError(e);
        }
    }
}
