import { type PostDescription, type PostImg, type PostTitle } from 'models/post';

export interface PostDto {
    post: {
        cpu: string
        description: PostDescription
        id: string
        img: PostImg
        os: string
        slogan: string
        staticId: string
        title: PostTitle
        year: number
    }
}
