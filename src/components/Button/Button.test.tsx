import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When instantiated", () => {
    test("It should display the text recibed as props", () => {
      render(<Button text="test-button" />);

      const buttonText = "test-button";

      const buttonElement = screen.getByRole("button", { name: buttonText });

      expect(buttonElement).not.toBeNull();
    });
  });
});
