import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { type PostCardListDto } from './types';

export const postCardListSlice = createApi({
    reducerPath: 'postCardListAPI',
    // TODO to env
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5010/api' }),
    tagTypes: ['PostCardList'],
    refetchOnMountOrArgChange: true,
    endpoints: (build) => ({
        fetchPostCardList: build.query<PostCardListDto, number>({
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
