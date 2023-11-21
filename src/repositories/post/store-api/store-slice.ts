import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { type PostDto } from './types';
import { type Post } from 'models/post';

export const postSlice = createApi({
    reducerPath: 'postAPI',
    // TODO to env
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5010/api' }),
    tagTypes: ['Post'],
    refetchOnMountOrArgChange: true,
    endpoints: (build) => ({
        fetchPostCardList: build.query<Post, string>({
            query: (id: string) => ({
                url: `/post/${id}`
            }),
            transformResponse: (data: PostDto) => {
                return {
                    id: data.post.staticId,
                    description: data.post.description,
                    img: data.post.img,
                    title: data.post.title,
                    slogan: data.post.slogan,
                    specifications: {
                        cpu: data.post.cpu,
                        os: data.post.os,
                        year: data.post.year.toString()
                    }
                };
            },
            providesTags: result => ['Post']
        })
    })
});
