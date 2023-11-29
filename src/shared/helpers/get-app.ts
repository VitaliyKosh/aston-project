import { type Application } from 'features/application/application';

export function getApp (): Application {
    return global.window.app;
};
