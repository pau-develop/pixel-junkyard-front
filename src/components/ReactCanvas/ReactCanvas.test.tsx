import "jest-canvas-mock";
import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import ReactCanvas from "./ReactCanvas";
import React from "react";
import * as canvasFunctions from "../../utils/ReactCanvasFunctions";
import { Provider } from "react-redux";
import { store } from "../../app/store";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

beforeEach(() => {
  Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given a ReactCanvas component", () => {
  describe("When button 'SAVE' is pressed", () => {
    test("A Menu with the heading 'SAVE CANVAS' should appear", () => {
      render(<ReactCanvas />, { wrapper: Wrapper });

      const buttonText = "SAVE";
      const buttonElement = screen.getByRole("button", { name: buttonText });

      fireEvent.click(buttonElement);

      const headingText = "SAVE CANVAS";
      const headingElement = screen.getByRole("heading", { name: headingText });

      expect(headingElement).not.toBeNull();
    });
  });

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
      const spyGetFunction = jest.spyOn(
        canvasFunctions,
        "getCanvasScaledValue"
      );

      render(<ReactCanvas />, { wrapper: Wrapper });
      const canvasElement = screen.getByTestId("canvas-desktop");
      const clickEventDown = createEvent.mouseDown(canvasElement, {
        clientX: 50,
        clientY: 50,
        buttons: 1,
      });
      const clickEventMove = createEvent.mouseMove(canvasElement, {
        clientX: 60,
        clientY: 60,
        buttons: 1,
      });
      fireEvent(canvasElement, clickEventDown);
      fireEvent(canvasElement, clickEventMove);

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
      const useStateMock: any = (useState: boolean) => [
        mockState,
        mockSetState,
      ];
      jest.spyOn(React, "useState").mockImplementation(useStateMock);
      const spyGetFunction = jest.spyOn(
        canvasFunctions,
        "getCanvasScaledValue"
      );

      render(<ReactCanvas />, { wrapper: Wrapper });

      const canvasElement = screen.getByTestId("canvas-mobile");

      const touchEventMove = createEvent.touchMove(canvasElement, {
        targetTouches: [
          {
            clientX: 237.80003356933594,
            clientY: 253,
            force: 1,
            identifier: 0,
            pageX: 237.80003356933594,
            pageY: 253,
            radiusX: 11.5,
            radiusY: 11.5,
            rotationAngle: 0,
            screenX: 356.8000183105469,
            screenY: 416,
            target: canvasElement,
          },
        ],
      });

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

  describe("When color is changed it ReactCanvasTools component", () => {
    test("The color state variable should change", () => {
      const mockState = "";
      const mockSetState = jest.fn();
      const useStateMock: any = (useState: boolean) => [
        mockState,
        mockSetState,
      ];
      jest.spyOn(React, "useState").mockImplementation(useStateMock);

      render(<ReactCanvas />, { wrapper: Wrapper });

      const colorInputElement = screen.getByTestId("color-input");

      fireEvent.change(colorInputElement, {
        target: { value: "#666" },
      });

      expect(mockSetState).toHaveBeenCalled();
    });
  });

  describe("When '+' button is clicked", () => {
    test("The multiplier state variable should increment", () => {
      const mockState = 2;
      const mockSetState = jest.fn();
      const useStateMock: any = (useState: boolean) => [
        mockState,
        mockSetState,
      ];
      jest.spyOn(React, "useState").mockImplementation(useStateMock);

      render(<ReactCanvas />, { wrapper: Wrapper });

      const incrementButtonText = "+";
      const incrementButtonElement = screen.getByRole("button", {
        name: incrementButtonText,
      });

      fireEvent.click(incrementButtonElement);

      expect(mockSetState).toHaveBeenCalled();
    });

    test("Unless multiplier variable is already 16", () => {
      const mockState = 16;
      const mockSetState = jest.fn();
      const useStateMock: any = (useState: boolean) => [
        mockState,
        mockSetState,
      ];
      jest.spyOn(React, "useState").mockImplementation(useStateMock);

      render(<ReactCanvas />, { wrapper: Wrapper });

      const incrementButtonText = "+";
      const incrementButtonElement = screen.getByRole("button", {
        name: incrementButtonText,
      });

      fireEvent.click(incrementButtonElement);

      expect(mockSetState).not.toHaveBeenCalled();
    });
  });

  describe("When '-' button is clicked", () => {
    test("The multiplier state variable should decrement", () => {
      const mockState = 4;
      const mockSetState = jest.fn();
      const useStateMock: any = (useState: boolean) => [
        mockState,
        mockSetState,
      ];
      jest.spyOn(React, "useState").mockImplementation(useStateMock);

      render(<ReactCanvas />, { wrapper: Wrapper });

      const decrementButtonText = "-";
      const decrementButtonElement = screen.getByRole("button", {
        name: decrementButtonText,
      });

      fireEvent.click(decrementButtonElement);

      expect(mockSetState).toHaveBeenCalled();
    });

    test("Unless multiplier variable is already 0", () => {
      const mockState = 1;
      const mockSetState = jest.fn();
      const useStateMock: any = (useState: boolean) => [
        mockState,
        mockSetState,
      ];
      jest.spyOn(React, "useState").mockImplementation(useStateMock);

      render(<ReactCanvas />, { wrapper: Wrapper });

      const decrementButtonText = "-";
      const decrementButtonElement = screen.getByRole("button", {
        name: decrementButtonText,
      });

      fireEvent.click(decrementButtonElement);

      expect(mockSetState).not.toHaveBeenCalled();
    });
  });
});
