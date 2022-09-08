import "jest-canvas-mock";
import { fillOnMissingCells, checkDifference } from "./ReactCanvasFunctions";

describe("Given a fillOnMissedCells function", () => {
  describe("When called, it should iterate over a loop according to the passed value totalIterations", () => {
    test("And it should substract 1 from differenceX & differenceY in each iteration if both values are positive", () => {
      const canvasContext = document
        .createElement("canvas")
        .getContext("2d") as CanvasRenderingContext2D;
      const differenceX = 2;
      const differenceY = 2;
      const expectedDifferenceX = 0;
      const expectedDifferenceY = 0;
      const returnedDifference = fillOnMissingCells(
        canvasContext,
        differenceX,
        differenceY,
        2,
        2,
        2,
        5
      );

      expect(returnedDifference).toStrictEqual([
        expectedDifferenceX,
        expectedDifferenceY,
      ]);
    });

    test("And it should add 1 to differenceX & differenceY in each iteration if both values are negative", () => {
      const canvasContext = document
        .createElement("canvas")
        .getContext("2d") as CanvasRenderingContext2D;
      const differenceX = -2;
      const differenceY = -2;
      const expectedDifferenceX = 0;
      const expectedDifferenceY = 0;
      const returnedDifference = fillOnMissingCells(
        canvasContext,
        differenceX,
        differenceY,
        2,
        2,
        2,
        5
      );
      expect(returnedDifference).toStrictEqual([
        expectedDifferenceX,
        expectedDifferenceY,
      ]);
    });
  });
});

describe("Given a checkDifference function", () => {
  describe("When called with a lastPosition, nextPosition and the difference between this two numbers", () => {
    test("It should return the difference as a negative number if lastPos is bigger than the newPosition", () => {
      const difference = 5;
      const lastPos = 10;
      const newPos = 5;
      const expectedDifference = -5;

      const result = checkDifference(lastPos, newPos, difference);

      expect(result).toBe(expectedDifference);
    });
  });
});
