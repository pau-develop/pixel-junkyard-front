import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import drawingsReducer from "../store/reducers/drawingsReducer";
import themeReducer from "../store/reducers/themeReducer";
import uiReducer from "../store/reducers/uiReducer";
import userReducer from "../store/reducers/userReducer";
import usersReducer from "../store/reducers/usersReducer";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    users: usersReducer,
    drawings: drawingsReducer,
    theme: themeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
