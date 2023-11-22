export type PostDescription = string;
export type PostImg = string;
export type PostTitle = string;

export type Specifications = 'year' | 'os' | 'cpu';
export type SpecificationNames = Record<Specifications, string>;
export type PostSpecifications = Record<Specifications, string>;

export interface Post {
    id: string
    title: PostTitle
    img?: PostImg
    specifications: PostSpecifications
    description?: PostDescription
    slogan: string
}

export type PostNames = Record<keyof Post, string>;

export interface PostModel {
    getPost: (count: string) => Promise<Post>
}
