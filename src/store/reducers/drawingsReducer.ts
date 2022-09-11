import { createReducer } from "@reduxjs/toolkit";
import { IDrawing } from "../../interfaces/interfaces";
import actionTypes from "../actionTypes/actionTypes";
import { IDrawingAction, IDrawingActionSingle } from "../types/actionTypes";

const initialState: IDrawing[] = [];

const drawingsReducer = createReducer<IDrawing[]>(initialState, (builder) => {
  builder.addCase(
    actionTypes.getAllDrawings,
    (state: IDrawing[], action: IDrawingAction) => [...action.payload]
  );

  builder.addCase(
    actionTypes.getDrawingById,
    (state: IDrawing[], action: IDrawingAction) => [...action.payload]
  );

  builder.addCase(
    actionTypes.deleteDrawing,
    (state: IDrawing[], action: IDrawingActionSingle) =>
      state.filter((drawing) => drawing.id !== action.payload.id)
  );

  builder.addDefaultCase((state: IDrawing[]) => state);
});

export default drawingsReducer;
