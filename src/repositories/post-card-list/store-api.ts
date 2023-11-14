import { postCardListSlice } from './store-slice';
import { type PostCard } from 'models/post-card-list';
import { StoreApiRepository } from 'repositories/types';

export class PostStoreApiRepository extends StoreApiRepository {
    public async readModel (count: number): Promise<PostCard[]> {
        const { data } = await this.store.dispatch(postCardListSlice.endpoints.fetchPostCardList.initiate(count));
        return data.postCards;
    }
}
