import { AuthStatus } from 'shared/models/user';
import { useObservableState } from 'repositories/redux/hooks/use-observable-state';
import { useRTKAsyncState } from 'repositories/redux/hooks/use-rtk-async-state';
import { getApp } from 'shared/helpers/get-app';
import { type RC } from 'shared/types/component';
import { PostCardList } from 'widgets/post-card-list';

export const MainPage: RC = () => {
    const app = getApp();
    const postCards = useRTKAsyncState(async () => await app.postCardList.getCardList(5), []);
    const authStatus = useObservableState(() => app.user.getAuthStatus());

    return (
        <div>
            <PostCardList
                postCards={postCards}
                isAuth={authStatus === AuthStatus.SignedIn}
            />
        </div>
    );
};
