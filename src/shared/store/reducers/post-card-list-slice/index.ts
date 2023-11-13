import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { type PostCard } from 'models/post-card-list';

export const postCardListAPI = createApi({
    reducerPath: 'postCardListAPI',
    // TODO to env
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5010/api' }),
    tagTypes: ['PostCardList'],
    endpoints: (build) => ({
        fetchPostCardList: build.query<PostCard[], number>({
            query: (limit: number = 5) => ({
                url: '/postCardList',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['PostCardList']
        })
    })
});
