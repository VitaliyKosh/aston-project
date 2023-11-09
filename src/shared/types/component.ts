import type React from 'react';

export type RC<T = Record<string, unknown>> = (props?: T) => React.JSX.Element;
