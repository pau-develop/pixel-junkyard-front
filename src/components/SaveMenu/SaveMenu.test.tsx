import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import SaveMenu from "./SaveMenu";

const mockCreateDrawing = jest.fn();

jest.mock("../../hooks/useDrawings", () => ({
  __esModule: true,
  ...jest.requireActual("../../hooks/useDrawings"),
  default: () => ({
    createDrawing: () => mockCreateDrawing(),
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

describe("Given a SaveMenu component", () => {
  describe("When text is entered in the input field", () => {
    test("It should update the value property of input", () => {
      render(<SaveMenu action={() => null} canvasData="" />, {
        wrapper: Wrapper,
      });
      const inputName = screen.getByLabelText(
        "Painting name"
      ) as HTMLInputElement;
      const inputDescription = screen.getByLabelText(
        "Painting description"
      ) as HTMLInputElement;

      fireEvent.change(inputName, {
        target: { value: "a" },
      });
      fireEvent.change(inputDescription, {
        target: { value: "a" },
      });

      expect(inputName.value).toBe("a");
      expect(inputDescription.value).toBe("a");
    });
  });

  describe("When accept button is clicked", () => {
    test("If the current Form is the register form, the function registerUser from hook should be called", () => {
      render(<SaveMenu action={() => null} canvasData="" />, {
        wrapper: Wrapper,
      });
      const buttonText = "Accept";

      const buttonElement = screen.getByRole("button", { name: buttonText });

      fireEvent.click(buttonElement);

      expect(mockCreateDrawing).toHaveBeenCalled();
    });
  });
});
