import "jest-canvas-mock";
import { fireEvent, render, screen } from "@testing-library/react";
import CanvasPage from "./CanvasPage";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter } from "react-router-dom";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

beforeEach(() => {
  Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  };
});

describe("Given a CanvasPage component", () => {
  describe("When instantiated", () => {
    test("It should show a heading with the text 'Canvas'", () => {
      render(<CanvasPage />, { wrapper: Wrapper });

      const headingText = "Canvas";
      const headingElement = screen.getByRole("heading", { name: headingText });

      expect(headingElement).not.toBeNull();
    });

    test("When resolution 60x90 button is clicked it should render a 60x90 canvas", () => {
      render(<CanvasPage />, { wrapper: Wrapper });

      const buttonText = "60x90";
      const buttonElement = screen.getByRole("button", { name: buttonText });
      fireEvent.click(buttonElement);
      const canvasElement = screen.getByTestId("canvas-desktop");
      expect(canvasElement).not.toBeNull();
    });

    test("When resolution 90x120 button is clicked it should render a 90x120 canvas", () => {
      render(<CanvasPage />, { wrapper: Wrapper });

      const buttonText = "30x45";
      const buttonElement = screen.getByRole("button", { name: buttonText });
      fireEvent.click(buttonElement);
      const canvasElement = screen.getByTestId("canvas-desktop");
      expect(canvasElement).not.toBeNull();
    });
  });
});
