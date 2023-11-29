import c from './list-part.module.scss';
import { type RC } from 'shared/types/component';
import { type StringKeysOf } from 'shared/types/string-keys-of';

interface Props<T extends Record<StringKeysOf<T>, string>> {
    keys: Array<StringKeysOf<T>>
    dictionary: Record<StringKeysOf<T>, string>
    source: T
}

export const ListPart = <T extends Record<StringKeysOf<T>, string>>({
    keys,
    dictionary,
    source
}: Props<T>): ReturnType<RC<Props<T>>> => {
    return keys.map((key) => (
        <div
            className={c.part}
            key={key.toString()}
        >
            <div className={c.title}>{dictionary[key]}</div>
            <div className={c.description}>{source[key]}</div>
        </div>
    ));
};
