import { configureStore, createReducer } from "@reduxjs/toolkit";
import { IUser } from "../interfaces/interfaces";
import { IUIModal } from "../store/types/interfaces";

const initialUiState = {
  isOpen: true,
  message: "",
};

const initialUserState = {
  userName: "",
  token: "",
};

const mockUiReducer = createReducer<IUIModal>(initialUiState, (builder) => {
  builder.addDefaultCase((state: IUIModal) => state);
});

const mockUserReducer = createReducer<IUser>(initialUserState, (builder) => {
  builder.addDefaultCase((state: IUser) => state);
});

const mockStore = configureStore({
  reducer: {
    ui: mockUiReducer,
    user: mockUserReducer,
  },
});

export default mockStore;
