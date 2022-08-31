import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import UnknownPage from "./UnknownPage";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given an UnknownPage component", () => {
  describe("When instantiated", () => {
    test("It should show a heading with the text 'ERROR 404'", () => {
      render(
        <BrowserRouter>
          <UnknownPage />
        </BrowserRouter>
      );

      const headingText = "ERROR 404";
      const headingElement = screen.getByRole("heading", { name: headingText });

      expect(headingElement).not.toBeNull();
    });

    test("After 3 seconds, user should be redirected to previous page", () => {
      jest.useFakeTimers();

      render(
        <BrowserRouter>
          <UnknownPage />
        </BrowserRouter>
      );

      jest.advanceTimersByTime(3000);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});
