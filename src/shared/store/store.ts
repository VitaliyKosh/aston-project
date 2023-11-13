import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postCardListAPI } from './reducers/post-card-list-slice';

const rootReducer = combineReducers({
    [postCardListAPI.reducerPath]: postCardListAPI.reducer
});

// Слишком сложный тип, он должен выводиться автоматически
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(postCardListAPI.middleware)
    });
};

// Автоматический вывод типа
export type AppStore = ReturnType<typeof setupStore>;
