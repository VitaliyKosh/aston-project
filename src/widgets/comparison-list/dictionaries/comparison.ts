import { specificationDictionary } from 'shared/dictionaries/specifications';
import { postDictionary } from 'shared/dictionaries/post';
import { type ComparisonKeys, keys } from '../types/types';
import { isObjectKey } from 'shared/helpers/is-object-key';

export const comparisonDictionary = Object.fromEntries(Object.values(keys).map(key => {
    let entry: [ComparisonKeys, string];

    if (isObjectKey(key, postDictionary)) {
        entry = [key, postDictionary[key]];
    } else {
        entry = [key, specificationDictionary[key]];
    }

    return entry;
})) as Record<ComparisonKeys, string>;
