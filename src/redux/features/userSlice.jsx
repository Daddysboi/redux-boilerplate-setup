import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetUserById } from "../services/userServices";

export const getUserById = createAsyncThunk("getUserById", async (userId) => {
  try {
    resp = await GetUserById(userId);
    return resp;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  user: {},
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setUser, setUsers } = userSlice.actions;
export default userSlice.reducer;
