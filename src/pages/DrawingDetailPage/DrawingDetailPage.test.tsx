import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import mockStore from "../../mocks/mockStore";
import DrawingDetailPage from "./DrawingDetailPage";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

beforeEach(() => {
  Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return (
      <Provider store={mockStore}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  };
});

describe("Given a RegisterFormPage component", () => {
  describe("When instantiated", () => {
    test("It should show a heading with the text 'Register'", () => {
      render(<DrawingDetailPage />, { wrapper: Wrapper });

      const headingText = "Drawing";
      const headingElement = screen.getByRole("heading", { name: headingText });

      expect(headingElement).not.toBeNull();
    });
  });
});
