import { ReduxApiRepository } from 'repositories/redux';
import { postCardListSlice } from './store-slice';
import { type PostCard } from 'models/post-card-list';
import { AppError, PostErrorCodes } from 'repositories/error';

export class PostStoreApiRepository extends ReduxApiRepository {
    public async readModel (count: number): Promise<PostCard[]> {
        const { data } = await this.api.dispatch(postCardListSlice.endpoints.fetchPostCardList.initiate(count));

        if (!data) {
            throw new AppError(PostErrorCodes.FETCH_POST_CARDS_FAIL);
        }

        return data.postCards;
    }
}
