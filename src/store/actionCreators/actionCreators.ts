import { createAction } from "@reduxjs/toolkit";

import actionTypes from "../actionTypes/actionTypes";
import { IUIModalDisplay, IUIModalHide } from "../types/actionTypes";

export const openModal = createAction<IUIModalDisplay>(actionTypes.displayUI);

export const closeModal = createAction<IUIModalHide>(actionTypes.hideUI);
