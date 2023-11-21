import { type RC } from 'shared/types/component';
import {
    FavoriteListContext,
    type FavoriteListContextValue
} from 'widgets/comparison-list/providers/favorite-list-provider/lib/favorite-list-context';
import { ComparisonList } from '../comparison-list/comparison-list';

export const FavoriteList: RC<FavoriteListContextValue> = (props) => {
    return (
        <FavoriteListContext.Provider value={props}>
            <ComparisonList/>
        </FavoriteListContext.Provider>
    );
};
