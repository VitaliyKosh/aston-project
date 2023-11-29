import { postSlice } from 'repositories/post';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import { Logger } from 'shared/lib/logger/logger';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    actionCreator: postSlice.internalActions.subscriptionsUpdated,
    effect: async () => {
        Logger.log('Post fetched');
    }
});
