import { createReducer } from "@reduxjs/toolkit";
import { IDrawing } from "../../interfaces/interfaces";
import actionTypes from "../actionTypes/actionTypes";
import { IDrawingAction } from "../types/actionTypes";

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
    (state: IDrawing[], action: IDrawingAction) => {
      action.payload = state.filter(
        (drawing) => drawing.id !== action.payload[0].id
      );
      return action.payload;
    }
  );

  builder.addDefaultCase((state: IDrawing[]) => state);
});

export default drawingsReducer;
