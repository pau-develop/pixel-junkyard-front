import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";

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
    test("It should show a bunch of inputs with labels 'Register'", () => {
      render(<Form formType={"register"} />);

      const labelText = "User name";

      const labelElement = screen.getByLabelText(labelText);

      expect(labelElement).not.toBeNull();
    });
  });

  describe("When text is entered in the input field", () => {
    test("It should update the value property of input", () => {
      render(<Form formType={"register"} />);
      const inputName = screen.getByLabelText("User name") as HTMLInputElement;
      const inputPassword = screen.getByLabelText(
        "Password"
      ) as HTMLInputElement;
      const inputEmail = screen.getByLabelText("Email") as HTMLInputElement;

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
      render(<Form formType={"register"} />);
      const buttonText = "Accept";

      const buttonElement = screen.getByRole("button", { name: buttonText });

      fireEvent.click(buttonElement);

      expect(mockRegisterUser).toHaveBeenCalled();
    });
  });
});
