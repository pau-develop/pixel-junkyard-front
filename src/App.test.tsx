import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";
import mockStore from "./mocks/mockStore";

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
  });
});
