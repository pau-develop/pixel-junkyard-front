import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockStore from "../../mocks/mockStore";
import DrawingDetail from "./DrawingDetail";

const mockGetDrawingById = jest.fn();

jest.mock("../../hooks/useDrawings", () => ({
  __esModule: true,
  ...jest.requireActual("../../hooks/useDrawings"),
  default: () => ({
    getDrawingById: () => mockGetDrawingById(),
    updateDrawing: () => jest.fn(),
  }),
}));

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

describe("Given a DrawingDetail component", () => {
  describe("When like button is clicked", () => {
    test("It should call the hook function updateDrawing & getDrawingById", async () => {
      await render(<DrawingDetail />, { wrapper: Wrapper });
      const likeDesktopElement = screen.getByTestId("like-desktop");
      const dislikeDesktopElement = screen.getByTestId("dislike-desktop");
      const likeMobileElement = screen.getByTestId("like-mobile");
      const dislikeMobileElement = screen.getByTestId("dislike-mobile");

      fireEvent.click(likeDesktopElement);
      fireEvent.click(dislikeDesktopElement);
      fireEvent.click(likeMobileElement);
      fireEvent.click(dislikeMobileElement);
      expect(mockGetDrawingById).toHaveBeenCalled();
    });
  });
});
