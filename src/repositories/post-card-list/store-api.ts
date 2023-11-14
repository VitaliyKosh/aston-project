import { postCardListSlice } from './store-slice';
import { type PostCard } from 'models/post-card-list';
import { ReduxApiRepository } from 'repositories/types';

export class PostStoreApiRepository extends ReduxApiRepository {
    public async readModel (count: number): Promise<PostCard[]> {
        const { data } = await this.api.dispatch(postCardListSlice.endpoints.fetchPostCardList.initiate(count));
        return data.postCards;
    }
}
