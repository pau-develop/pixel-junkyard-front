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

      const canvasElement = screen.getByTestId("canvas-desktop");

      expect(canvasElement).not.toBeNull();
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

  describe("When instantiated on phone", () => {
    test("It should show a phone canvas", () => {
      window.innerWidth = 599;

      render(<ReactCanvas />);

      const canvasElement = screen.getByTestId("canvas-mobile");

      expect(canvasElement).not.toBeNull();
    });
  });

  describe("When clicking on phone Canvas", () => {
    test("The function getCanvasValues should be called", () => {
      const spyGetFunction = jest.spyOn(
        canvasFunctions,
        "getCanvasScaledValue"
      );
      render(<ReactCanvas />);
      const canvasElement = screen.getByTestId("canvas-mobile");
      const touchEvent = createEvent.touchStart(canvasElement, {
        targetTouches: [
          {
            clientX: 1073,
            clientY: 268,
            force: 1,
            identifier: 0,
            pageX: 1000,
            pageY: 268,
            radiusX: 12,
            radiusY: 12,
            rotationAngle: 0,
            screenX: 2580,
            screenY: 202,
            target: canvasElement,
          },
        ],
      });

      fireEvent(canvasElement, touchEvent);
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
      const canvasElement = screen.getByTestId("canvas-mobile");
      const touchEventStart = createEvent.touchStart(canvasElement, {
        targetTouches: [
          {
            clientX: 1073,
            clientY: 268,
            force: 1,
            identifier: 0,
            pageX: 1073,
            pageY: 268,
            radiusX: 12,
            radiusY: 12,
            rotationAngle: 0,
            screenX: 2580,
            screenY: 202,
            target: canvasElement,
          },
        ],
      });
      const touchEventMove = createEvent.touchMove(canvasElement, {
        targetTouches: [
          {
            clientX: 800,
            clientY: 300,
            force: 1,
            identifier: 0,
            pageX: 800,
            pageY: 300,
            radiusX: 12,
            radiusY: 12,
            rotationAngle: 0,
            screenX: 2580,
            screenY: 202,
            target: canvasElement,
          },
        ],
      });
      fireEvent(canvasElement, touchEventStart);
      fireEvent(canvasElement, touchEventMove);

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
      const canvasElement = screen.getByTestId("canvas-mobile");
      const touchEvent = createEvent.touchMove(canvasElement, {
        clientX: 50,
        offsetX: 20,
        clientY: 50,
        offsetY: 20,
        buttons: 1,
      });
      fireEvent(canvasElement, touchEvent);

      expect(spyGetFunction).not.toHaveBeenCalled();
    });
  });
});
