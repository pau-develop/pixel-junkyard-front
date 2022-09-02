import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import LogoutMenu from "./LogoutMenu";

const mockLogoutUser = jest.fn();

jest.mock("../../hooks/useUser", () => ({
  __esModule: true,
  ...jest.requireActual("../../hooks/useUser"),
  default: () => ({
    logoutUser: () => mockLogoutUser(),
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

describe("Given a LogoutMenu component", () => {
  describe("When instantiated", () => {
    test("It should the text 'Do you want to log out?'", () => {
      render(<LogoutMenu menuClass="phone-logout-menu" action={() => null} />, {
        wrapper: Wrapper,
      });
      const spanElement = screen.getByText("Do you want to log out?");

      expect(spanElement).not.toBeNull();
    });
  });

  describe("When logout button is pressed", () => {
    test("It should call the userLogout function from hook", () => {
      render(<LogoutMenu menuClass="phone-logout-menu" action={() => null} />, {
        wrapper: Wrapper,
      });
      const buttonText = "OK";
      const buttonElement = screen.getByRole("button", { name: buttonText });

      fireEvent.click(buttonElement);

      expect(mockLogoutUser).toHaveBeenCalled();
    });
  });
});
