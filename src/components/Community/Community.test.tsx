import Community from "./Community";
import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import mockStore from "../../mocks/mockStore";

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

describe("Given a Community component", () => {
  describe("When instantiated", () => {
    test("It should show a UserCard with a heading with the username for each user in the state.users", () => {
      render(<Community />, { wrapper: Wrapper });
      const headingText = "user";
      const headingElement = screen.getByRole("heading", { name: headingText });

      expect(headingElement).not.toBeNull();
    });
  });
});
