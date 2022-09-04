import { configureStore, createReducer } from "@reduxjs/toolkit";
import { IUser, IUserVisible } from "../interfaces/interfaces";
import { IUIModal } from "../store/types/interfaces";
import mockUsers from "./mockUsers";

const initialUiState = {
  isOpen: true,
  message: "",
  type: "",
  redirect: "",
};

const initialUserState = {
  userName: "",
  token: "",
  _id: "",
};

const initialUsersState = mockUsers;

const mockUiReducer = createReducer<IUIModal>(initialUiState, (builder) => {
  builder.addDefaultCase((state: IUIModal) => state);
});

const mockUserReducer = createReducer<IUser>(initialUserState, (builder) => {
  builder.addDefaultCase((state: IUser) => state);
});

const mockUsersReducer = createReducer<IUserVisible[]>(
  initialUsersState,
  (builder) => {
    builder.addDefaultCase((state: IUserVisible[]) => state);
  }
);

const mockStore = configureStore({
  reducer: {
    ui: mockUiReducer,
    user: mockUserReducer,
    users: mockUsersReducer,
  },
});

export default mockStore;
