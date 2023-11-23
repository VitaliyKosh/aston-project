import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { type SearchingCardListQuery, type PostCardListDto } from './types';
import { type PostCard } from 'shared/models/post-card-list';

export const postCardListSlice = createApi({
    reducerPath: 'postCardListAPI',
    // TODO to env
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5010/api' }),
    tagTypes: ['PostCardList'],
    refetchOnMountOrArgChange: true,
    endpoints: (build) => ({
        fetchPostCardList: build.query<PostCard[], number>({
            query: (limit: number = 5) => ({
                url: '/postCardList',
                params: {
                    _limit: limit
                }
            }),
            transformResponse: (data: PostCardListDto) => {
                return data.postCards;
            },
            providesTags: result => ['PostCardList']
        }),
        searchingCardList: build.query<PostCard[], SearchingCardListQuery>({
            query: (query: SearchingCardListQuery) => ({
                url: '/postCardList/search',
                params: {
                    query: query.query ?? undefined,
                    limit: query.limit ?? undefined
                }
            }),
            transformResponse: (data: PostCardListDto) => {
                return data.postCards;
            },
            providesTags: result => ['PostCardList']
        })
    })
});
