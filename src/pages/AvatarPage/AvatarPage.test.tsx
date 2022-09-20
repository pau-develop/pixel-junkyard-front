import "jest-canvas-mock";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import AvatarPage from "./AvatarPage";

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

describe("Given a AvatarPage component", () => {
  describe("When instantiated", () => {
    test("It should show a heading with the text 'Avatar'", () => {
      render(<AvatarPage />, { wrapper: Wrapper });

      const headingText = "Avatar";
      const headingElement = screen.getByRole("heading", { name: headingText });

      expect(headingElement).not.toBeNull();
    });
  });
});
