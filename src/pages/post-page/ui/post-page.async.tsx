import { lazy } from 'react';

export const PostPageAsync = lazy(async () => await import('./post-page'));
