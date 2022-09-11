import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import mockDrawings from "../../mocks/mockDrawings";
import DrawingCard from "./DrawingCard";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

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

describe("Given a DrawingCard component", () => {
  describe("When instantiated", () => {
    test("It should the title of the drawing received as props", () => {
      render(<DrawingCard draw={mockDrawings[0]} />, { wrapper: Wrapper });

      const drawTitle = "mockDraw";
      const spanElement = screen.getByText(drawTitle);

      expect(spanElement).not.toBeNull();
    });

    test("And when an image is clicked, useNavigate should be called", () => {
      render(<DrawingCard draw={mockDrawings[0]} />, { wrapper: Wrapper });
      const image = screen.getByAltText("mockDraw");

      fireEvent.click(image);

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });
});
