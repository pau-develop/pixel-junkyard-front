import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When instantiated", () => {
    test("It should show a bunch of inputs with labels 'Register'", () => {
      render(<LoginForm />);

      const labelText = "User name";

      const labelElement = screen.getByLabelText(labelText);

      expect(labelElement).not.toBeNull();
    });
  });

  describe("When text is entered in the input field", () => {
    test("It should update the value property of input", () => {
      render(<LoginForm />);
      const inputName = screen.getByLabelText("User name") as HTMLInputElement;
      const inputPassword = screen.getByLabelText(
        "Password"
      ) as HTMLInputElement;

      fireEvent.change(inputName, {
        target: { value: "a" },
      });
      fireEvent.change(inputPassword, {
        target: { value: "a" },
      });

      expect(inputName.value).toBe("a");
      expect(inputPassword.value).toBe("a");
    });
  });
});
