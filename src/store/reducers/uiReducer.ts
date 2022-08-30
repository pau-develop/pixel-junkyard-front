import { createReducer } from "@reduxjs/toolkit";

import actionTypes from "../actionTypes/actionTypes";
import { IUIModalDisplay, IUIModalHide } from "../types/actionTypes";
import { IUIModal } from "../types/interfaces";

const initialState = {
  isOpen: false,
  message: "",
};

const uiReducer = createReducer<IUIModal>(initialState, (builder) => {
  builder.addCase(
    actionTypes.displayUI,
    (state: IUIModal, action: IUIModalDisplay) => action.payload
  );
  builder.addCase(
    actionTypes.hideUI,
    (state: IUIModal, action: IUIModalHide) => action.payload
  );

  builder.addDefaultCase((state: IUIModal) => state);
});

export default uiReducer;
