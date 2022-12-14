import { createAction } from "@reduxjs/toolkit";
import {
  IDrawing,
  ITheme,
  IUser,
  IUserVisible,
} from "../../interfaces/interfaces";

import actionTypes from "../actionTypes/actionTypes";

import { IUIModal } from "../types/interfaces";

export const openModalActionNew = createAction<IUIModal>(actionTypes.displayUI);

export const closeModalActionNew = createAction<IUIModal>(actionTypes.hideUI);

export const loginUserActionNew = createAction<IUser>(actionTypes.loginUser);

export const logoutUserActionNew = createAction<IUser>(actionTypes.logoutUser);

export const getAllUsersActionNew = createAction<IUserVisible[]>(
  actionTypes.getAllUsers
);

export const getUserByIdActionNew = createAction<IUserVisible[]>(
  actionTypes.getUserById
);

export const getAllDrawingsActionNew = createAction<IDrawing[]>(
  actionTypes.getAllDrawings
);

export const getDrawingByIdActionNew = createAction<IDrawing[]>(
  actionTypes.getDrawingById
);

export const deleteDrawingActionNew = createAction<IDrawing[]>(
  actionTypes.deleteDrawing
);

export const changeThemeActionNew = createAction<ITheme>(
  actionTypes.changeTheme
);
