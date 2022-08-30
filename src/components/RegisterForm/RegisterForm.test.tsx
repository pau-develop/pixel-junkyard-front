import { fireEvent, render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

const mockRegisterUser = jest.fn();

jest.mock("../../hooks/useUsers", () => ({
  __esModule: true,
  ...jest.requireActual("../../hooks/useUsers"),
  default: () => ({
    registerUser: () => mockRegisterUser(),
  }),
}));

describe("Given a RegisterForm component", () => {
  describe("When instantiated", () => {
    test("It should show a heading with the text 'Register'", () => {
      render(<RegisterForm />);

      const headingText = "Register";

      const headingElement = screen.getByRole("heading", { name: headingText });

      expect(headingElement).not.toBeNull();
    });
  });

  describe("When text is entered in the input field", () => {
    test("It should update the value property of input", () => {
      render(<RegisterForm />);
      const inputName = screen.getByTestId("name") as HTMLInputElement;
      const inputPassword = screen.getByTestId("password") as HTMLInputElement;
      const inputEmail = screen.getByTestId("email") as HTMLInputElement;

      fireEvent.change(inputName, {
        target: { value: "a" },
      });
      fireEvent.change(inputPassword, {
        target: { value: "a" },
      });
      fireEvent.change(inputEmail, {
        target: { value: "a" },
      });
      expect(inputName.value).toBe("a");
      expect(inputPassword.value).toBe("a");
      expect(inputEmail.value).toBe("a");
    });
  });

  describe("When accept button is clicked", () => {
    test("the function registerUser from hook should be called", () => {
      render(<RegisterForm />);
      const buttonText = "Accept";

      const buttonElement = screen.getByRole("button", { name: buttonText });

      fireEvent.click(buttonElement);

      expect(mockRegisterUser).toHaveBeenCalled();
    });
  });
});
