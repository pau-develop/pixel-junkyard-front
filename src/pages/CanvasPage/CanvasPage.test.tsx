import "jest-canvas-mock";
import { render, screen } from "@testing-library/react";
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
  });
});
