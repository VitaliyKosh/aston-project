import { type ReactNode } from 'react';

export type RC<T = Record<string, unknown>> = (props: T) => ReactNode;
