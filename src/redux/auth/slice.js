import { createSlice } from "@reduxjs/toolkit";
import { apiLogin, apiRegister, apiRefreshUser, apiLogout } from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) =>
    builder
      /**
        |============================
        | Register
        |============================
      */
      .addCase(apiRegister.pending, (state) => {
        state.error = null;
      })
      .addCase(apiRegister.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(apiRegister.rejected, (state, action) => {
        state.error = action.payload;
      })
      /**
        |============================
        | Login
        |============================
      */
      .addCase(apiLogin.pending, (state) => {
        state.error = null;
      })
      .addCase(apiLogin.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(apiLogin.rejected, (state, action) => {
        state.error = action.payload;
      })
      /**
        |============================
        | RefreshUser
        |============================
      */
      .addCase(apiRefreshUser.pending, (state) => {
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        state.isRefreshing = false;
      })
      .addCase(apiRefreshUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      })

      /**
        |============================
        |  Logout
        |============================
      */
      .addCase(apiLogout.pending, (state) => {
        state.error = null;
      })
      .addCase(apiLogout.fulfilled, (state) => {
        state.contacts = [];
        state.error = null;
        state.isLoggedIn = false;
      })
      .addCase(apiLogout.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
