import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";
import mockStore from "./mocks/mockStore";
import * as utils from "./utils/auth";

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

describe("Given an App component", () => {
  describe("When instantiated", () => {
    test("It should show a heading with the text 'Pixel Junkyard'", () => {
      render(<App />, { wrapper: Wrapper });

      const textContent = "Pixel Junkyard";

      const headingElement = screen.getByRole("heading", { name: textContent });

      expect(headingElement).not.toBeNull();
    });

    test("If ui.state is set to isOpen, a modal should be shown", () => {
      Wrapper = ({ children }: WrapperProps): JSX.Element => {
        return (
          <Provider store={mockStore}>
            <BrowserRouter>{children}</BrowserRouter>
          </Provider>
        );
      };
      render(<App />, { wrapper: Wrapper });

      const modalElement = screen.getByTestId("modal-element");
      expect(modalElement).not.toBeNull();
    });

    test("If there is a token in the storage, fetchToken function should be called", () => {
      const mockToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwODYxYzk5MGM3MDlhNmNlYjk0NWQiLCJ1c2VyTmFtZSI6InRlc3RpbmciLCJpYXQiOjE2NjIxMzk1Mzd9.EKxxxoIKOLRRPDR4Uuh-_QmFM8khGF4_-mxbIxjrOpE";
      window.localStorage.setItem("token", mockToken);
      const mockFetch = jest.spyOn(utils, "fetchToken");
      render(<App />, { wrapper: Wrapper });

      expect(mockFetch).toHaveBeenCalled();
    });
  });
});
