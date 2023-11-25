import { type InferProps } from 'prop-types';
import { type ReactNode } from 'react';

export interface RC<T = Record<string, unknown>> {
    propTypes?: Record<string, InferProps<T>>
    (props: T): ReactNode
}
