import { createAction } from "@reduxjs/toolkit";
import { IUser, IUserVisible } from "../../interfaces/interfaces";

import actionTypes from "../actionTypes/actionTypes";

import { IUIModal } from "../types/interfaces";

export const openModalActionNew = createAction<IUIModal>(actionTypes.displayUI);

export const closeModalActionNew = createAction<IUIModal>(actionTypes.hideUI);

export const loginUserActionNew = createAction<IUser>(actionTypes.loginUser);

export const logoutUserActionNew = createAction<IUser>(actionTypes.logoutUser);

export const getAllUsersActionNew = createAction<IUserVisible>(
  actionTypes.getAllUsers
);
