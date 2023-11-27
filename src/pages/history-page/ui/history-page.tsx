import { SearchHistory } from 'widgets/search-history';
import c from './history.module.scss';
import { type RC } from 'shared/types/component';
import { PageTitle } from 'shared/ui/page-title/page-title';

const HistoryPage: RC = () => {
    return (
        <div className={c.historyPage}>
            <PageTitle>История поиска</PageTitle>
            <SearchHistory/>
        </div>
    );
};

export default HistoryPage;
