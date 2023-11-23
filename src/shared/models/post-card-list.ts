import { type DispatchResult } from 'repositories/redux/types';
import { type Post } from './post';

export type PostCardKeys = 'id' | 'title' | 'img' | 'description';
export type PostCard = Pick<Post, PostCardKeys>;

export interface PostCardListModel {
    getCardList: (count: number) => Promise<PostCard[]>
    searchingCardList: (query: string | null | undefined, limit?: number) => Promise<DispatchResult<PostCard[]>>
};
