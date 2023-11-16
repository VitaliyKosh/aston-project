import { type Application } from 'features/application';

export function getApp (): Application {
    return global.window.app;
};
