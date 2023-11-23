import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postCardListSlice } from 'repositories/post-card-list/store-api/store-slice';
import { userReducer } from 'repositories/user/store-api/store-slice';
import { ApiRepository } from 'repositories/types';
import { postSlice } from 'repositories/post';
import { listenerMiddleware } from './middlewares';

const rootReducer = combineReducers({
    userReducer,
    [postCardListSlice.reducerPath]: postCardListSlice.reducer,
    [postSlice.reducerPath]: postSlice.reducer
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const reduxStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            postCardListSlice.middleware,
            postSlice.middleware,
            listenerMiddleware.middleware
        ])
});

export type ReduxStoreApi = typeof reduxStore;
export type ReduxDispatch = typeof reduxStore.dispatch;
export type ReduxState = ReturnType<typeof reduxStore.getState>;

export abstract class ReduxApiRepository extends ApiRepository {
    readonly api: ReduxStoreApi;
    readonly getState: () => ReduxState;
    readonly dispatch: ReduxDispatch;

    constructor (api: ReduxStoreApi) {
        super();
        this.api = api;
        this.getState = api.getState;
        this.dispatch = api.dispatch;
    }
}
