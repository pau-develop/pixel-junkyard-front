import { IDrawing } from "../../interfaces/interfaces";
import mockDrawings from "../../mocks/mockDrawings";
import { getAllDrawingsActionNew } from "../actionCreators/actionCreators";
import drawingsReducer from "./drawingsReducer";

describe("Given a drawingsReducer", () => {
  describe("When its called with a getAllDrawingsActionNew", () => {
    test("It should update the store state with the user received as arguments", () => {
      const drawings: IDrawing[] = mockDrawings;

      const action = getAllDrawingsActionNew(drawings);
      const result = drawingsReducer(drawings, action);

      expect(result).toStrictEqual(drawings);
    });

    describe("When its called with an unknown action", () => {
      test("It should return its current state", () => {
        const drawings: IDrawing[] = mockDrawings;

        const action = getAllDrawingsActionNew(drawings);
        const result = drawingsReducer(drawings, action);

        expect(result).toStrictEqual(drawings);

        const unknownAction = {
          type: "unknown",
        };
        const newResult = drawingsReducer(drawings, unknownAction);

        expect(newResult).toStrictEqual(drawings);
      });
    });
  });
});
