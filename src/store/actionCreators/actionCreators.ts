import { createAction } from "@reduxjs/toolkit";

import actionTypes from "../actionTypes/actionTypes";

import { IUIModal } from "../types/interfaces";

export const openModalActionNew = createAction<IUIModal>(actionTypes.displayUI);

export const closeModalActionNew = createAction<IUIModal>(actionTypes.hideUI);
