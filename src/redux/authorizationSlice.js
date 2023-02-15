import { createSlice } from '@reduxjs/toolkit';
import {
  userSignup,
  userLogin,
  userLogout,
  refreshUser,
} from './authorizationOperation';

const authorizationInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: authorizationInitialState,
  extraReducers: builder =>
    builder
      .addCase(userSignup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(userLogout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, (state, _) => {
        state.isLoading = false;
      })
      .addCase(userLogin.rejected, () => {
        console.log(
          'Sorry, the user with this email address and password is not registered. Verify your email and password and try again'
        );
      }),
});
