import { postSlice } from './store-slice';
import { ReduxApiRepository } from 'repositories/redux';
import { AppError, PostErrorCodes } from 'shared/lib/app-error/app-error';
import { type Post } from 'models/post';

export class PostStoreApiRepository extends ReduxApiRepository {
    public async getPost (id: string): Promise<Post> {
        const { data } = await this.dispatch(postSlice.endpoints.fetchPostCardList.initiate(id));

        if (!data) {
            throw new AppError(PostErrorCodes.FETCH_POST_FAIL);
        }

        return data;
    }
}
