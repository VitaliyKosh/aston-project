export interface SearchItem {
    id: string
    query: string
}
export type SearchHistory = SearchItem[];

export interface SearchHistoryModel {
    searched: (query: string) => Promise<void>
    searchRemoved: (id: string) => Promise<void>
    getSearchHistory: () => Promise<SearchHistory>
};
