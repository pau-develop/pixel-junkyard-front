import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import SaveMenu from "./SaveMenu";
import userEvent from "@testing-library/user-event";

const mockCreateDrawing = jest.fn();

jest.mock("../../hooks/useDrawings", () => ({
  __esModule: true,
  ...jest.requireActual("../../hooks/useDrawings"),
  default: () => ({
    createDrawing: () => mockCreateDrawing(),
  }),
}));

const mockUpdateUser = jest.fn();

jest.mock("../../hooks/useUser", () => ({
  __esModule: true,
  ...jest.requireActual("../../hooks/useUser"),
  default: () => ({
    updateUser: () => mockUpdateUser(),
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
      render(
        <SaveMenu
          action={() => null}
          canvasData=""
          resolutionX={60}
          resolutionY={90}
        />,
        {
          wrapper: Wrapper,
        }
      );
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
    test("The createDrawing function should be called", async () => {
      global.fetch = jest.fn().mockReturnValue({
        then: jest.fn().mockImplementationOnce(() => {
          Promise.resolve(new Blob());
        }),
      });
      render(
        <SaveMenu
          action={() => null}
          canvasData="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHgBAAQA+/8Afx09AAAA//8BAAD//wH4ANocB6ZLAAAAAElFTkSuQmCC
"
          resolutionX={60}
          resolutionY={90}
        />,
        {
          wrapper: Wrapper,
        }
      );

      const buttonText = "Accept";
      const buttonElement = screen.getByRole("button", { name: buttonText });
      await userEvent.click(buttonElement);
      expect(mockCreateDrawing).toHaveBeenCalled();
    });

    test("But if we are on avatar edit canvas the updateUser function should be called", async () => {
      render(
        <SaveMenu
          action={() => null}
          canvasData="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHgBAAQA+/8Afx09AAAA//8BAAD//wH4ANocB6ZLAAAAAElFTkSuQmCC
"
          resolutionX={32}
          resolutionY={32}
        />,
        {
          wrapper: Wrapper,
        }
      );

      const buttonText = "Accept";
      const buttonElement = screen.getByRole("button", { name: buttonText });
      await userEvent.click(buttonElement);
      expect(mockUpdateUser).toHaveBeenCalled();
    });
  });
});
