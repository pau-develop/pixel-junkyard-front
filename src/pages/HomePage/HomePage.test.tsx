import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";

describe("Given a GuestPage component", () => {
  describe("When instantiated", () => {
    test("It should show a couple buttons with the text 'Log in' and 'Register'", () => {
      render(
        <BrowserRouter>
          <HomePage userLogged={false} />
        </BrowserRouter>
      );

      const registerButtonText = "Register";
      const loginButtonText = "Log in";

      const registerButtonElement = screen.getByRole("button", {
        name: registerButtonText,
      });
      const loginButtonElement = screen.getByRole("button", {
        name: loginButtonText,
      });

      expect(registerButtonElement).not.toBeNull();
      expect(loginButtonElement).not.toBeNull();
    });

    test("And if user is logged in it should show a heading with the text 'Welcome'", () => {
      render(
        <BrowserRouter>
          <HomePage userLogged={true} />
        </BrowserRouter>
      );

      const headingText = "Welcome";
      const headingElement = screen.getByRole("heading", { name: headingText });

      expect(headingElement).not.toBeNull();
    });
  });
});
