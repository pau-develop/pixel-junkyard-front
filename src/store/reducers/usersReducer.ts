import { createReducer } from "@reduxjs/toolkit";
import { IUserVisible } from "../../interfaces/interfaces";
import actionTypes from "../actionTypes/actionTypes";
import { IUserVisibleAction } from "../types/actionTypes";

const initialState: IUserVisible[] = [];

const usersReducer = createReducer<IUserVisible[]>(initialState, (builder) => {
  builder.addCase(
    actionTypes.getAllUsers,
    (state: IUserVisible[], action: IUserVisibleAction) => [...action.payload]
  );
  builder.addCase(
    actionTypes.getUserById,
    (state: IUserVisible[], action: IUserVisibleAction) => [...action.payload]
  );

  builder.addDefaultCase((state: IUserVisible[]) => state);
});

export default usersReducer;
