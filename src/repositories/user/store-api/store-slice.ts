import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthStatus, type User } from 'models/user';

interface UserState {
    user: User
    authStatus: AuthStatus
}

const initialState: UserState = {
    user: {
        id: '',
        email: ''
    },
    authStatus: AuthStatus.Pending
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userSignsUp (state) {
            state.authStatus = AuthStatus.Pending;
        },
        userSignedUp (state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.authStatus = AuthStatus.SignedIn;
        },
        userSignsIn (state) {
            state.authStatus = AuthStatus.Pending;
        },
        userSignedIn (state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.authStatus = AuthStatus.SignedIn;
        },
        userSignsOut (state) {
            state.authStatus = AuthStatus.Pending;
        },
        userSignedOut (state) {
            state = initialState;
            state.authStatus = AuthStatus.SignedOut;
        }
    }
});

export const {
    userSignsUp,
    userSignedUp,
    userSignsIn,
    userSignedIn,
    userSignsOut,
    userSignedOut
} = userSlice.actions;
export const userReducer = userSlice.reducer;
