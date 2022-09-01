import { createAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/interfaces";

import actionTypes from "../actionTypes/actionTypes";

import { IUIModal } from "../types/interfaces";

export const openModalActionNew = createAction<IUIModal>(actionTypes.displayUI);

export const closeModalActionNew = createAction<IUIModal>(actionTypes.hideUI);

export const loginUserActionNew = createAction<IUser>(actionTypes.loginUser);
