import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postCardListSlice } from '../post-card-list/store-slice';
import { userReducer } from 'repositories/user/store-api/store-slice';

const rootReducer = combineReducers({
    userReducer,
    [postCardListSlice.reducerPath]: postCardListSlice.reducer
});

// Слишком сложный тип, он должен выводиться автоматически
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(postCardListSlice.middleware)
    });
};

// Автоматический вывод типа
export type ReduxStoreApi = ReturnType<typeof setupStore>;
