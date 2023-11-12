import { PostApiRepository } from '../../repositories/post-card-list';
import { PostStoreRepository } from '../../repositories/post-card-list/store';
import { PostCardListDataService, PostCardListStoreService } from '../../services/post-card-list';
import { PostCardList } from './post-card-list';

const postApiRepository = new PostApiRepository();
const postStoreRepository = new PostStoreRepository();

const postDataService = new PostCardListDataService({
    apiRepository: postApiRepository
});
const postStoreService = new PostCardListStoreService(postStoreRepository);

export const postCardList = new PostCardList({
    dataService: postDataService,
    storeService: postStoreService
});
