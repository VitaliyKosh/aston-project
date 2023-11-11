import { type PostCard } from '../../../models/post-card-list';
import { fetchApi } from '../../../shared/lib/network';
import { type GetPostCardApiDto } from './types';

export class PostApiRepository {
    private readonly apiLibrary = fetchApi;

    public async getPostCardList (): Promise<PostCard[]> {
        const postsDto = await this.apiLibrary.getJSON<GetPostCardApiDto>({
            url: '/postCards'
        });

        return this.toDomain(postsDto);
    }

    public toDomain (postCardListDto: GetPostCardApiDto): PostCard[] {
        return postCardListDto.postCards;
    }
}
