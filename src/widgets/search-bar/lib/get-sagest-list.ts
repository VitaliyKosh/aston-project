import { type PostCard } from 'shared/models/post-card-list';
import { type Sagest } from '../types/sagest';
import { getSagestDescription } from './get-sagest-description';

export const getSagestList = (
    postCardList: PostCard[],
    query: string,
    extension: number,
    delimiter?: string
): Sagest[] => {
    return postCardList.map((postCard) => ({
        id: postCard.id,
        img: postCard.img,
        title: postCard.title,
        description: getSagestDescription(query, postCard.description, extension, delimiter)
    }));
};
