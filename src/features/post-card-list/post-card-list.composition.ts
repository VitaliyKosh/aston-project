import { PostApiRepository } from '../../repositories/post';
import { PostStoreRepository } from '../../repositories/post/store';
import { PostDataService, PostStoreService } from '../../services/post';
import { PostCardList } from './post-card-list';

const postApiRepository = new PostApiRepository();
const postStoreRepository = new PostStoreRepository();

const postDataService = new PostDataService({
    apiRepository: postApiRepository
});
const postStoreService = new PostStoreService(postStoreRepository);

export const postCardList = new PostCardList({
    dataService: postDataService,
    storeService: postStoreService
});
