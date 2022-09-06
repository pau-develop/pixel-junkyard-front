import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockStore from "../../mocks/mockStore";
import Gallery from "./Gallery";

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

describe("Given a Gallery component", () => {
  describe("When instantiated", () => {
    test("It should show a DrawingCard component for each element in state.drawings array", () => {
      render(<Gallery />, { wrapper: Wrapper });

      const cardTitle = "mockDraw";
      const cardHeadingElement = screen.getByText(cardTitle);

      expect(cardHeadingElement).not.toBeNull();
    });
  });
});
