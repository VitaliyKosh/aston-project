import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postCardListSlice } from '../post-card-list/store-api/store-slice';
import { userReducer } from 'repositories/user/store-api/store-slice';
import { ApiRepository } from 'repositories/types';

const rootReducer = combineReducers({
    userReducer,
    [postCardListSlice.reducerPath]: postCardListSlice.reducer
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(postCardListSlice.middleware)
    });
};

export type ReduxStoreApi = ReturnType<typeof setupStore>;

export abstract class ReduxApiRepository extends ApiRepository {
    readonly api: ReduxStoreApi;

    constructor (api: ReduxStoreApi) {
        super();
        this.api = api;
    }
}
