import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Register, SendOtp } from "../services/authServices.jsx";

export const register = createAsyncThunk(
  "register",
  async ({ email, password, role }) => {
    try {
      resp = await Register({ email, password, role });
      return resp;
    } catch (error) {
      throw error;
    }
  }
);

export const sendOtp = createAsyncThunk("sendOtp", async ({ email }) => {
  try {
    resp = await SendOtp({ email });
    return resp;
  } catch (error) {
    throw error;
  }
});

const initialState = {};
export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducer: {},
  extraReducer: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfiled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(register.rejected, (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    });
  },
});

export const { actions, reducer } = registerSlice;

export const { setLoginPhone } = actions;
export default reducer;
