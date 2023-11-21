import { type Post } from 'models/post';
import { type Row, keys } from '../types';
import { isObjectKey } from 'shared/helpers/is-object-key';

export const getRows = (list: Post[]): Row[] => {
    return Object.values(keys).map(key => ({
        key,
        values: list.map(item => {
            let value;

            if (isObjectKey(key, item)) {
                value = item[key];
            } else {
                value = item.specifications[key];
            }

            return {
                id: item.id,
                key,
                value
            };
        })
    }));
};
