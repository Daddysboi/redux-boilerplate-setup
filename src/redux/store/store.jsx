import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import registerReducer from "../features/registerSlice";
import loginReducer from "../features/loginSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    register: registerReducer,
    login: loginReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these field paths in all actions
        ignoredActionPaths: ["payload.subtitle.$$typeof"],
      },
    }),
});
