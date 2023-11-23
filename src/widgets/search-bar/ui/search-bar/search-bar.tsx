import React, { useEffect, useState } from 'react';
import c from './search-bar.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';
import { Button } from 'shared/ui/button/button';
import { getApp } from 'shared/helpers/get-app';
import { InputWithSagest } from '../input-with-sagest/input-with-sagest';
import { type Sagest } from 'widgets/search-bar/types/sagest';
import { getSagestList } from 'widgets/search-bar/lib/get-sagest-list';
import { useDebounce } from 'widgets/search-bar/hooks/use-debounce';
import { createSearchParams, useSearchParams } from 'react-router-dom';

interface Props {
    className?: string
}

export const SearchBar: RC<Props> = ({ className }) => {
    const app = getApp();

    const [, setSearchParams] = useSearchParams();

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [sagestList, setSagestList] = useState<Sagest[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const debouncedSearchTerm = useDebounce(searchQuery, 500);

    const searchingSagest = async (query: string, unmounted: { value: boolean }): Promise<void> => {
        if (!query || query.length < 3) {
            setSagestList([]);
            return;
        }

        setIsLoading(true);

        const { data: postCardList } = await app.postCardList.searchingCardList(query.toLocaleLowerCase(), 10);

        setIsLoading(false);

        if (unmounted.value || !postCardList) {
            return;
        }

        const newSagestList = getSagestList(postCardList, query, 20, '|');

        setSagestList(newSagestList);
    };

    const handleSearchButtonClick = (): void => {
        setSearchParams(createSearchParams({
            query: searchQuery
        }));
    };

    const handleKeypressEvent = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            setSearchParams(createSearchParams({
                query: searchQuery
            }));
            e.currentTarget.blur();
        }
    };

    useEffect(() => {
        const unmounted = { value: false };
        void searchingSagest(searchQuery, unmounted);

        return () => {
            unmounted.value = true;
        };
    }, [debouncedSearchTerm]);

    return (
        <div className={classNames([c.searchBar, className])}>
            <InputWithSagest
                handleKeypressEvent={handleKeypressEvent}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                sagestList={sagestList}
                isLoading={isLoading}
            />
            <Button
                size='s'
                onClick={handleSearchButtonClick}
            >
                Поиск
            </Button>
        </div>
    );
};
