import { type PostCard } from 'shared/models/post-card-list';

export interface PostCardListDto {
    postCards: PostCard[]
}

export interface SearchingCardListQuery {
    query: string | null | undefined
    limit?: number
}

export interface SearchingCardListActionCreatorResult {
    data: PostCard[]
    isLoading: boolean
}
