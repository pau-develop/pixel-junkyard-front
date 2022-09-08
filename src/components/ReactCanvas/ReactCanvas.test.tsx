import "jest-canvas-mock";
import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import ReactCanvas from "./ReactCanvas";
import React from "react";
import * as canvasFunctions from "../../utils/ReactCanvasFunctions";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given a ReactCanvas component", () => {
  describe("When instantiated on desktop", () => {
    test("It should show a desktop canvas", () => {
      window.innerWidth = 800;

      render(<ReactCanvas />);

      const canvasElement = screen.getAllByTestId("canvas-desktop");

      expect(canvasElement[0]).not.toBeNull();
    });
  });

  describe("When clicking on Canvas", () => {
    test("The function getCanvasValues should be called", () => {
      const spyGetFunction = jest.spyOn(
        canvasFunctions,
        "getCanvasScaledValue"
      );

      render(<ReactCanvas />);
      const canvasElement = screen.getByTestId("canvas-desktop");
      const clickEvent = createEvent.mouseDown(canvasElement, {
        clientX: 50,
        clientY: 50,
        buttons: 1,
      });
      fireEvent(canvasElement, clickEvent);

      expect(spyGetFunction).toHaveBeenCalled();
    });

    test("And also when dragging mouse while clicking", () => {
      const mockState = true;
      const mockSetState = jest.fn();
      const useStateMock: any = (useState: any) => [mockState, mockSetState];
      jest.spyOn(React, "useState").mockImplementation(useStateMock);

      const spyGetFunction = jest.spyOn(
        canvasFunctions,
        "getCanvasScaledValue"
      );

      render(<ReactCanvas />);
      const canvasElement = screen.getByTestId("canvas-desktop");
      const clickEvent = createEvent.mouseMove(canvasElement, {
        clientX: 50,
        clientY: 50,
        buttons: 1,
      });
      fireEvent(canvasElement, clickEvent);

      expect(spyGetFunction).toHaveBeenCalled();
    });

    test("Unless isDrawing is set to false", () => {
      const mockState = false;
      const mockSetState = jest.fn();
      const useStateMock: any = (useState: any) => [mockState, mockSetState];
      jest.spyOn(React, "useState").mockImplementation(useStateMock);

      const spyGetFunction = jest.spyOn(
        canvasFunctions,
        "getCanvasScaledValue"
      );

      render(<ReactCanvas />);
      const canvasElement = screen.getByTestId("canvas-desktop");
      const clickEvent = createEvent.mouseMove(canvasElement, {
        clientX: 50,
        offsetX: 20,
        clientY: 50,
        offsetY: 20,
        buttons: 1,
      });
      fireEvent(canvasElement, clickEvent);

      expect(spyGetFunction).not.toHaveBeenCalled();
    });

    test("When lifting the finger from the mouse, the function endDraw should be called", () => {
      const mockSetState = jest.fn();
      const useStateMock: any = (useState: any) => [useState, mockSetState];
      jest.spyOn(React, "useState").mockImplementation(useStateMock);

      render(<ReactCanvas />);
      const canvasElement = screen.getByTestId("canvas-desktop");
      const clickEvent = createEvent.mouseUp(canvasElement, {
        clientX: 50,

        clientY: 50,

        buttons: 1,
      });
      fireEvent(canvasElement, clickEvent);
      expect(mockSetState).toHaveBeenCalledWith(false);
    });
  });
});
