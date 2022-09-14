import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockStore from "../../mocks/mockStore";
import Gallery from "./Gallery";
import userEvent from "@testing-library/user-event";
import React from "react";

afterEach(() => {
  jest.resetAllMocks();
});

jest.mock("../../hooks/useDrawings", () => ({
  __esModule: true,
  ...jest.requireActual("../../hooks/useDrawings"),
  default: () => ({
    getAllDrawings: () => jest.fn().mockReturnValue(20),
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

describe("Given a Gallery component", () => {
  describe("When instantiated", () => {
    test("It should show a DrawingCard component for each element in state.drawings array", () => {
      render(<Gallery />, { wrapper: Wrapper });

      const cardTitle = "mockDraw";
      const cardHeadingElement = screen.getByText(cardTitle);

      expect(cardHeadingElement).not.toBeNull();
    });

    test("When increment button is clicked it should add 4 to offset", async () => {
      render(<Gallery />, { wrapper: Wrapper });
      const spanElement = screen.getByText("0/0");
      expect(spanElement).not.toBeNull();
      const incrementButton = screen.getByRole("button", { name: ">>" });
      await userEvent.click(incrementButton);
      const spanElementAfterIncrement = screen.getByText("2/5");
      expect(spanElementAfterIncrement).not.toBeNull();
    });

    test("If the offset surpasses the total, the offset should be equal to the total", async () => {
      render(<Gallery />, { wrapper: Wrapper });
      const spanElement = screen.getByText("0/0");
      expect(spanElement).not.toBeNull();
      const incrementButton = screen.getByRole("button", { name: ">>" });
      await userEvent.click(incrementButton);
      await userEvent.click(incrementButton);
      await userEvent.click(incrementButton);
      await userEvent.click(incrementButton);
      await userEvent.click(incrementButton);
      const spanElementAfterIncrement = screen.getByText("5/5");
      expect(spanElementAfterIncrement).not.toBeNull();
    });

    test("When decrement button is clicked, it should substract 4 from offset", async () => {
      render(<Gallery />, { wrapper: Wrapper });
      const spanElement = screen.getByText("0/0");
      expect(spanElement).not.toBeNull();
      const decrementButton = screen.getByRole("button", { name: "<<" });
      const incrementButton = screen.getByRole("button", { name: ">>" });
      await userEvent.click(incrementButton);
      await userEvent.click(decrementButton);
      const spanElementAfterDecrement = screen.getByText("1/5");
      expect(spanElementAfterDecrement).not.toBeNull();
    });

    test("Unless offset is already set to 4", async () => {
      render(<Gallery />, { wrapper: Wrapper });
      const spanElement = screen.getByText("0/0");
      expect(spanElement).not.toBeNull();
      const decrementButton = screen.getByRole("button", { name: "<<" });
      await userEvent.click(decrementButton);
      const spanElementAfterDecrement = screen.getByText("1/5");
      expect(spanElementAfterDecrement).not.toBeNull();
    });
  });

  describe("If resolution button is clicked", () => {
    test("It should open a menu with filter options", () => {
      render(<Gallery />, { wrapper: Wrapper });
      const buttonText = "resolution";
      const buttonElement = screen.getByRole("button", { name: buttonText });
      fireEvent.click(buttonElement);
      const menuButtonText = "60x90";
      const menuButtonElement = screen.getByRole("button", {
        name: menuButtonText,
      });
      expect(menuButtonElement).not.toBeNull();
    });

    test("And if the 60x90 filter button in filter menu is pressed it should apply that filter to the gallery", () => {
      render(<Gallery />, { wrapper: Wrapper });
      const buttonText = "resolution";
      const buttonElement = screen.getByRole("button", { name: buttonText });
      fireEvent.click(buttonElement);
      const menuButtonText = "60x90";
      const menuButtonElement = screen.getByRole("button", {
        name: menuButtonText,
      });
      fireEvent.click(menuButtonElement);
      const spanElement = screen.getByText("60x90");
      expect(spanElement).not.toBeNull();
    });

    test("And if the 30x45 button in filter menu is pressed it should apply that filter to the gallery", () => {
      render(<Gallery />, { wrapper: Wrapper });
      const buttonText = "resolution";
      const buttonElement = screen.getByRole("button", { name: buttonText });
      fireEvent.click(buttonElement);
      const menuButtonText = "30x45";
      const menuButtonElement = screen.getByRole("button", {
        name: menuButtonText,
      });
      fireEvent.click(menuButtonElement);
      const spanElement = screen.getByText("30x45");
      expect(spanElement).not.toBeNull();
    });
  });
});
