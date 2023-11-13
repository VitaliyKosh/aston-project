import { type Post } from './post';

export type PostCardKeys = 'id' | 'title' | 'img' | 'description';
export type PostCard = Pick<Post, PostCardKeys>;

export interface PostCardListModel {
    refreshCardList: () => Promise<void>
    getCardList: () => PostCard[]
};
