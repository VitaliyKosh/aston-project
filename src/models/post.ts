export type PostDescription = string;
export type PostImg = string;
export type PostTitle = string;

export type Specifications = 'year' | 'slogan' | 'os' | 'cpu';
export type PostSpecifications = Record<Specifications, string>;

export interface Post {
    id: string
    title: PostTitle
    img?: PostImg
    specifications: PostSpecifications
    description?: PostDescription
}
