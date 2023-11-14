import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginStatus, type User } from 'models/user';

interface UserState {
    user: User
    loginStatus: LoginStatus
}

const initialState: UserState = {
    user: {
        id: '',
        email: ''
    },
    loginStatus: LoginStatus.Pending
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userSignsUp (state) {
            state.loginStatus = LoginStatus.Pending;
        },
        userSignedUp (state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.loginStatus = LoginStatus.LoggedIn;
        },
        userSignsIn (state) {
            state.loginStatus = LoginStatus.Pending;
        },
        userSignedIn (state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.loginStatus = LoginStatus.LoggedIn;
        },
        userSignsOut (state) {
            state.loginStatus = LoginStatus.Pending;
        },
        userSignedOut (state) {
            state = initialState;
            state.loginStatus = LoginStatus.LoggedOut;
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
