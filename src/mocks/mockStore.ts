import { configureStore, createReducer } from "@reduxjs/toolkit";
import {
  IDrawing,
  ITheme,
  IUser,
  IUserVisible,
} from "../interfaces/interfaces";
import { IUIModal } from "../store/types/interfaces";
import mockDrawings from "./mockDrawings";
import mockUser from "./mockUser";
import mockUsers from "./mockUsers";

const initialUiState = {
  isOpen: true,
  message: "",
  type: "",
  redirect: "",
  id: "",
};

const initialThemeState = {
  primaryColor: "#144573",
  secondaryColor: "#A1CEF6",
  thirdColor: "#000",
  linearGradient: `linear-gradient(90deg, #000 0%, #144573 50%, #000 100%)`,
  smallBreakPoint: "1400px",
  bigBreakPoint: "2000px",
};

const initialUsersState = mockUsers;

const initialDrawingsState = mockDrawings;

const mockUiReducer = createReducer<IUIModal>(initialUiState, (builder) => {
  builder.addDefaultCase((state: IUIModal) => state);
});

const mockUserReducer = createReducer<IUser>(mockUser, (builder) => {
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

const mockThemeReducer = createReducer<ITheme>(initialThemeState, (builder) => {
  builder.addDefaultCase((state: ITheme) => state);
});

const mockStore = configureStore({
  reducer: {
    ui: mockUiReducer,
    user: mockUserReducer,
    users: mockUsersReducer,
    drawings: mockDrawingsReducer,
    theme: mockThemeReducer,
  },
});

export default mockStore;
