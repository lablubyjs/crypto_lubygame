import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';

import connectionSlice from './connection-slice';
import questionsSlice from './questions-slice';

const store = configureStore({
    reducer: {
        questions: questionsSlice,
        connection: connectionSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ThunkConfig = {state: RootState; dipatch: AppDispatch};

export type AppThunk = ThunkAction<void, RootState, null, Action<any>>;

export default store;
