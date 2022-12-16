import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: localStorage.getItem('stockApp_user') ? JSON.parse(localStorage.getItem('stockApp_user')) : null,
    loading: false,
    error: false,
    isAdmin: false,
    token: localStorage.getItem('stockApp_token') ? JSON.parse(localStorage.getItem('stockApp_token')) : null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      // state.currentUser = payload?.user?.username;
      localStorage.setItem('stockApp_user', JSON.stringify(payload?.user?.username));
      state.isAdmin = payload?.user?.is_superuser;
      // state.token = payload?.key;
      localStorage.setItem('stockApp_token', JSON.stringify(payload?.key));
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.token = null;
      localStorage.removeItem("stockApp_user");
      localStorage.removeItem("stockApp_token");
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.username;
      state.token = payload?.token;
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} = authSlice.actions;
export default authSlice.reducer;