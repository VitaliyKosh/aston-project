import { type MouseEvent, useEffect, useState } from 'react';
import c from './search-history.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';
import { getApp } from 'shared/helpers/get-app';
import { type SearchHistory as SearchHistoryType } from 'shared/models/search-history';
import { Link } from 'react-router-dom';
import { getLocationWithParams } from 'shared/helpers/get-location';
import { publicRoutePaths } from 'app/providers/app-router/config/route-configs';
import { Button } from 'shared/ui/button/button';

interface Props {
    className?: string
}

export const SearchHistory: RC<Props> = ({ className }) => {
    const app = getApp();
    const [searchHistory, setSearchHistory] = useState<SearchHistoryType>([]);

    const getSearchHistory = async (): Promise<void> => {
        const searchHistoryRes = await app.searchHistory.getSearchHistory();
        setSearchHistory(searchHistoryRes);
    };

    const handleRemoveSearch = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, id: string): void => {
        e.preventDefault();
        e.stopPropagation();
        void app.searchHistory.searchRemoved(id);
        setSearchHistory(h => h.filter(s => s.id !== id));
    };

    useEffect(() => {
        void getSearchHistory();
    }, []);

    return (
        <div className={classNames([c.searchHistory, className])}>
            {searchHistory.map(s => {
                return (
                    <Link
                        key={s.id}
                        className={c.search}
                        to={getLocationWithParams(publicRoutePaths.MAIN, {}, { query: s.query })}
                    >
                        {s.query}
                        <Button
                            size='s'
                            onClick={(e) => { handleRemoveSearch(e, s.id); }}
                        >
                            Удалить
                        </Button>
                    </Link>
                );
            })}
        </div>
    );
};
