import { ReduxApiRepository } from 'repositories/redux';
import { postCardListSlice } from './store-slice';
import { type PostCard } from 'shared/models/post-card-list';
import { AppError, PostErrorCodes } from 'shared/lib/app-error/app-error';

export class PostCardListStoreApiRepository extends ReduxApiRepository {
    public async getPostCardList (count: number): Promise<PostCard[]> {
        const { data } = await this.dispatch(postCardListSlice.endpoints.fetchPostCardList.initiate(count));

        if (!data) {
            throw new AppError(PostErrorCodes.FETCH_POST_CARDS_FAIL);
        }

        return data;
    }
}
