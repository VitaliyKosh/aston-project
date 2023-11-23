import { AuthStatus } from 'shared/models/user';
import c from './main-page.module.scss';
import { useObservableState } from 'repositories/redux/hooks/use-observable-state';
import { useRTKAsyncState } from 'repositories/redux/hooks/use-rtk-async-state';
import { getApp } from 'shared/helpers/get-app';
import { type RC } from 'shared/types/component';
import { PostCardList } from 'widgets/post-card-list';
import { SearchBar } from 'widgets/search-bar';
import { useSearchParams } from 'react-router-dom';
import { PageLoader } from 'widgets/page-loader';

export const MainPage: RC = () => {
    const app = getApp();

    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    const {
        data: postCards,
        isLoading
    } = useRTKAsyncState(async () => await app.postCardList.searchingCardList(query), { data: [], isLoading: true }, [query]);
    const authStatus = useObservableState(() => app.user.getAuthStatus());

    return (
        <div className={c.mainPage}>
            <SearchBar />
            {postCards && !isLoading
                ? (
                    <PostCardList
                        postCards={postCards}
                        isAuth={authStatus === AuthStatus.SignedIn}
                    />
                )
                : <PageLoader/>
            }
        </div>
    );
};
