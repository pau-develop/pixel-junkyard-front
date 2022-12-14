import { createReducer } from "@reduxjs/toolkit";
import { ITheme } from "../../interfaces/interfaces";
import actionTypes from "../actionTypes/actionTypes";
import { IThemeAction } from "../types/actionTypes";

const initialState: ITheme = {
  primaryColor: "#144573",
  secondaryColor: "#A1CEF6",
  thirdColor: "#000",
  fadeColor: "#14457350",
  linearGradient: `linear-gradient(90deg, #000 0%, #144573 50%, #000 100%)`,
  smallBreakPoint: "1400px",
  bigBreakPoint: "2000px",
};

const themeReducer = createReducer(initialState, (builder) => {
  builder.addCase(
    actionTypes.changeTheme,
    (state: ITheme, action: IThemeAction) => action.payload
  );
  builder.addDefaultCase((state) => state);
});

export default themeReducer;
