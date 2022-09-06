import { configureStore, createReducer } from "@reduxjs/toolkit";
import { IDrawing, IUser, IUserVisible } from "../interfaces/interfaces";
import { IUIModal } from "../store/types/interfaces";
import mockDrawings from "./mockDrawings";
import mockUsers from "./mockUsers";

const initialUiState = {
  isOpen: true,
  message: "",
  type: "",
  redirect: "",
  id: "",
};

const initialUserState = {
  userName: "",
  token: "",
  _id: "",
};

const initialUsersState = mockUsers;

const initialDrawingsState = mockDrawings;

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

const mockDrawingsReducer = createReducer<IDrawing[]>(
  initialDrawingsState,
  (builder) => {
    builder.addDefaultCase((state: IDrawing[]) => state);
  }
);

const mockStore = configureStore({
  reducer: {
    ui: mockUiReducer,
    user: mockUserReducer,
    users: mockUsersReducer,
    drawings: mockDrawingsReducer,
  },
});

export default mockStore;
