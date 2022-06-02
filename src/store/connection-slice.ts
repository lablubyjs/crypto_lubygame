import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {ThunkConfig} from '.';

import getWeb3 from '../getWeb3';

import LubyGameContract from '@contracts/LubyGame.json';

const initialConnectionState: any = {
    web3Instance: {},
    accounts: [],
    lubyGameContract: {},
    pending: false,
    error: false,
};

const connectionSlice = createSlice({
    name: 'connection',

    initialState: initialConnectionState,

    reducers: {
        addConnection: (state, action: PayloadAction<any>) => {
            state.web3Instance = action.payload.web3Instance;
            state.accounts = action.payload.accounts;
            state.lubyGameContract = action.payload.lubyGameContract;
        },

        extraReducers: (builder) => {
            builder
                .addCase(asyncFetchConnection.pending, (state: any) => {
                    state.pending = true;
                })
                .addCase(
                    asyncFetchConnection.fulfilled,
                    (state: any, action: PayloadAction<any>) => {
                        state.pending = false;
                        state.list = action.payload;
                    }
                )
                .addCase(asyncFetchConnection.rejected, (state: any) => {
                    state.pending = false;
                    state.error = true;
                });
        },
    },
});

export const asyncFetchConnection = createAsyncThunk<any, void, ThunkConfig>(
    'questions/fetchConnection',
    async (_, ThunkAPI) => {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        const contract = new web3.eth.Contract(
            LubyGameContract.abi,
            LubyGameContract.networks[5777] &&
            LubyGameContract.networks[5777].address
        );
        const connection = {
            web3Instance: web3,
            accounts: accounts,
            lubyGameContract: contract,
        };
        ThunkAPI.dispatch(addConnection(connection));
        return connection;
    }
);

export const {addConnection} = connectionSlice.actions;

export default connectionSlice.reducer;
