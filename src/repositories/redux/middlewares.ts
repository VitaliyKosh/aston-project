import { postSlice } from 'repositories/post';
import { createListenerMiddleware } from '@reduxjs/toolkit';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    actionCreator: postSlice.internalActions.subscriptionsUpdated,
    effect: async (action, listenerApi) => {
        // TODO do something
    }
});
