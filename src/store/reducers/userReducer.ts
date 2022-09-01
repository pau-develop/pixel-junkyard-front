import { createReducer } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/interfaces";
import actionTypes from "../actionTypes/actionTypes";
import { IUserAction } from "../types/actionTypes";

const initialState = {
  userName: "",
  token: "",
};

const userReducer = createReducer<IUser>(initialState, (builder) => {
  builder.addCase(
    actionTypes.loginUser,
    (state: IUser, action: IUserAction) => action.payload
  );

  builder.addDefaultCase((state: IUser) => state);
});

export default userReducer;
