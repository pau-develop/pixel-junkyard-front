import { IDrawing } from "../../interfaces/interfaces";
import mockDrawings from "../../mocks/mockDrawings";
import {
  deleteDrawingActionNew,
  getAllDrawingsActionNew,
  getDrawingByIdActionNew,
} from "../actionCreators/actionCreators";
import drawingsReducer from "./drawingsReducer";

describe("Given a drawingsReducer", () => {
  describe("When its called with a getAllDrawingsActionNew", () => {
    test("It should update the store state with the drawing array received as arguments", () => {
      const drawings: IDrawing[] = mockDrawings;

      const action = getAllDrawingsActionNew(drawings);
      const result = drawingsReducer(drawings, action);

      expect(result).toStrictEqual(drawings);
    });
  });
  describe("When its called with a getDrawingByIdActionNew", () => {
    test("It should update the store state with the drawing received as arguments", () => {
      const drawings: IDrawing[] = mockDrawings;

      const action = getDrawingByIdActionNew(drawings);
      const result = drawingsReducer(drawings, action);

      expect(result).toStrictEqual(drawings);
    });
  });
  describe("When its called with an unknown action", () => {
    test("It should return its current state", () => {
      const drawings: IDrawing[] = mockDrawings;

      const action = getDrawingByIdActionNew(drawings);
      const result = drawingsReducer(drawings, action);

      expect(result).toStrictEqual(drawings);

      const unknownAction = {
        type: "unknown",
      };
      const newResult = drawingsReducer(drawings, unknownAction);

      expect(newResult).toStrictEqual(drawings);
    });
  });

  describe("When its called with a deleteDrawingActionNew", () => {
    test("It should update the store state with an array of drawings minus the drawing received as arguments", () => {
      const drawingToDelete: IDrawing[] = [
        {
          id: "1",
          name: "mockDraw",
          description: "",
          image: "",
          artist: "",
          artistName: "",
          resolution: "60x90",
          creationDate: "",
          likes: [],
          dislikes: [],
        },
      ];
      const drawingArray = [
        {
          id: "1",
          name: "mockDraw",
          description: "",
          image: "",
          artist: "",
          artistName: "",
          resolution: "60x90",
          creationDate: "",
          likes: [],
          dislikes: [],
        },
        {
          id: "2",
          name: "mockDraw2",
          description: "",
          image: "",
          artist: "",
          artistName: "",
          resolution: "60x90",
          creationDate: "",
          likes: [],
          dislikes: [],
        },
        {
          id: "3",
          name: "mockDraw2",
          description: "",
          image: "",
          artist: "",
          artistName: "",
          resolution: "60x90",
          creationDate: "",
          likes: [],
          dislikes: [],
        },
      ];

      const action = deleteDrawingActionNew(drawingToDelete);
      const result = drawingsReducer(drawingArray, action);

      expect(result).toHaveLength(2);
    });
  });
});
