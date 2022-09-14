import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import mockDrawings from "../../mocks/mockDrawings";
import DrawingCard from "./DrawingCard";
import userEvent from "@testing-library/user-event";

const mockDeleteDrawing = jest.fn();

jest.mock("../../hooks/useDrawings", () => ({
  __esModule: true,
  ...jest.requireActual("../../hooks/useDrawings"),
  default: () => ({
    deleteDrawing: () => mockDeleteDrawing(),
  }),
}));

const mockGetUserById = jest.fn();

jest.mock("../../hooks/useUsers", () => ({
  __esModule: true,
  ...jest.requireActual("../../hooks/useUsers"),
  default: () => ({
    getUserById: () => mockGetUserById(),
  }),
}));

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
  useParams: () => ({
    id: "123",
  }),
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

    test("When the trash icon is clicked, an action to delete the drawing should be dispatched", async () => {
      render(<DrawingCard draw={mockDrawings[0]} />, { wrapper: Wrapper });
      const deleteIcon = screen.getByTestId("delete-icon");

      await userEvent.click(deleteIcon);

      expect(mockGetUserById).toHaveBeenCalled();
      expect(mockDeleteDrawing).toHaveBeenCalled();
    });

    test("And getUserById action shouldn't be dispatch if useParams id is undefined", async () => {
      render(<DrawingCard draw={mockDrawings[0]} />, { wrapper: Wrapper });
      const deleteIcon = screen.getByTestId("delete-icon");

      await userEvent.click(deleteIcon);

      expect(mockGetUserById).toHaveBeenCalled();
      expect(mockDeleteDrawing).toHaveBeenCalled();
    });
  });
});
