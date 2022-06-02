import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {ICategorie, ICategories, IQuestionsResponse} from '@shared/interfaces';

import {questionsServices} from '@shared/services';

import {ThunkConfig} from '.';

const {listQuestions} = questionsServices();

const initialQuestionsState: any = {
    list: [],
    pending: false,
    error: false,
};

const questionsSlice = createSlice({
    name: 'questions',

    initialState: initialQuestionsState,

    reducers: {
        addQuestions: (state, action: PayloadAction<IQuestionsResponse>) => {
            state.list = action.payload;
        },

        extraReducers: (builder) => {
            builder
                .addCase(asyncAddQuestions.pending, (state: any) => {
                    state.pending = true;
                })
                .addCase(
                    asyncAddQuestions.fulfilled,
                    (state: any, action: PayloadAction<IQuestionsResponse>) => {
                        state.pending = false;
                        state.list = action.payload;
                    }
                )
                .addCase(asyncAddQuestions.rejected, (state: any) => {
                    state.pending = false;
                    state.error = true;
                });
        },
    },
});

export const asyncAddQuestions = createAsyncThunk<
    IQuestionsResponse,
    void,
    ThunkConfig
>('questions/fetchQuestions', async (_, ThunkAPI) => {
    const response = await listQuestions();
    ThunkAPI.dispatch(addQuestions(response));
    return response;
});

export const {addQuestions} = questionsSlice.actions;

export default questionsSlice.reducer;
