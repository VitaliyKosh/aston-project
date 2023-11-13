import { postCardListAPI } from 'shared/store/reducers/post-card-list-slice';
import { type PostCard } from '../../models/post-card-list';
import { StoreApiRepository } from 'repositories/types';

export class PostStoreApiRepository extends StoreApiRepository {
    public async readModel (count: number): Promise<PostCard[]> {
        const { data: postCardList } = await this.store.dispatch(postCardListAPI.endpoints.fetchPostCardList.initiate(count));
        return postCardList;
    }
}
