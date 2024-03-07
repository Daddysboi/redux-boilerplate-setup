import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login } from "../services/authServices";

export const login = createAsyncThunk("login", async ({ email, password }) => {
  try {
    const resp = await Login({ email, password });
    if (resp?.data) {
      localStorage.setitem(USER_ID, JSON.stringify(resp?.data?.user[0]._id));
      localStorage.setitem(TOKEN, JSON.stringify(resp?.data?.token));
    }
    return resp;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  loginPhone: "",
  isLoggedIn: false,
  isLoading: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducer: {},
  extraReducer: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilded, (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
      state.LoggedIn = false;
    });
  },
});

export const { actions, reducer } = loginSlice;

export const { loginPhone } = actions;
export default reducer;
