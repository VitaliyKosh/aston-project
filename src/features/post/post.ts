import { type PostModel, type Post } from 'models/post';
import { type PostStoreApiService } from 'services/post';

export interface Dependencies {
    storeApiService: PostStoreApiService
};

export class PostFeature implements PostModel {
    readonly #storeApiService: PostStoreApiService;

    constructor (deps: Dependencies) {
        this.#storeApiService = deps.storeApiService;
    }

    async getPost (id: string): Promise<Post> {
        return await this.#storeApiService.getPost(id);
    }
}
