import { useMemo } from 'react';
import c from './highlight-text.module.scss';
import { type RC } from 'shared/types/component';

interface Props {
    children: string | undefined
    id: string
    delimiter?: string
}

export const HighlightText: RC<Props> = ({ children, id, delimiter = '|' }) => {
    const segments = useMemo(() => children?.split(delimiter), [children]);

    return segments?.map((text, i) => {
        if (i % 2 !== 0) {
            return <span key={`${id}${i}`} className={c.highlight}>{text}</span>;
        } else {
            return <span key={`${id}${i}`}>{text}</span>;
        }
    });
};
