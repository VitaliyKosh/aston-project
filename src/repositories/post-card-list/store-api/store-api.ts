import { ReduxApiRepository } from 'repositories/redux/redux';
import { postCardListSlice } from './store-slice';
import { type PostCard } from 'shared/models/post-card-list';
import { AppError, PostErrorCodes } from 'shared/lib/app-error/app-error';
import { type DispatchResult } from 'repositories/redux/types';

export class PostCardListStoreApiRepository extends ReduxApiRepository {
    public async getPostCardList (count: number): Promise<PostCard[]> {
        const { data } = await this.dispatch(postCardListSlice.endpoints.fetchPostCardList.initiate(count));

        if (!data) {
            throw new AppError(PostErrorCodes.FETCH_POST_CARDS_FAIL);
        }

        return data;
    }

    public async searchingCardList (
        query: string | null | undefined,
        limit?: number
    ): Promise<DispatchResult<PostCard[]>> {
        const result = await this.dispatch(postCardListSlice.endpoints.searchingCardList.initiate({ query, limit }));

        if (!result.data) {
            throw new AppError(PostErrorCodes.SEARCH_POST_CARDS_FAIL);
        }

        return result;
    }
}
