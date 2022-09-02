import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import LogoutMenu from "./LogoutMenu";

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
});
