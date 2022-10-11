import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import ThemeMenu from "./ThemeMenu";

const mockChangeTheme = jest.fn();

jest.mock("../../hooks/useTheme", () => ({
  __esModule: true,
  ...jest.requireActual("../../hooks/useTheme"),
  default: () => ({
    changeTheme: () => mockChangeTheme(),
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

describe("Given a ThemeMenu component", () => {
  describe("When user clicks on any of the colors", () => {
    test("The changeTheme hook function should be called", () => {
      render(<ThemeMenu menuClass="phone-theme-menu" action={() => null} />, {
        wrapper: Wrapper,
      });

      const buttonElements = screen.getAllByRole("listitem");
      fireEvent.click(buttonElements[0]);
      fireEvent.click(buttonElements[1]);
      fireEvent.click(buttonElements[2]);
      fireEvent.click(buttonElements[3]);
      fireEvent.click(buttonElements[4]);

      expect(mockChangeTheme).toHaveBeenCalled();
    });
  });
});
