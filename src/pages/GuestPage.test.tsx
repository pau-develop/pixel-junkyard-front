import { render, screen } from "@testing-library/react";
import GuestPage from "./GuestPage";

describe("Given a GuestPage component", () => {
  describe("When instantiated", () => {
    test("It should show a couple buttons with the text 'Log in' and 'Register'", () => {
      render(<GuestPage />);

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
  });
});
