import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Form from "./Form";

const mockRegisterUser = jest.fn();
const mockLoginUser = jest.fn();

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

jest.mock("../../hooks/useUser", () => ({
  __esModule: true,
  ...jest.requireActual("../../hooks/useUser"),
  default: () => ({
    registerUser: () => mockRegisterUser(),
    loginUser: () => mockLoginUser(),
  }),
}));

describe("Given a RegisterForm component", () => {
  describe("When instantiated", () => {
    test("It should show a bunch of inputs with labels 'Register'", () => {
      render(
        <BrowserRouter>
          <Form formType={"register"} />
        </BrowserRouter>
      );

      const labelText = "User name";

      const labelElement = screen.getByLabelText(labelText);

      expect(labelElement).not.toBeNull();
    });
  });

  describe("When text is entered in the input field", () => {
    test("It should update the value property of input", () => {
      render(
        <BrowserRouter>
          <Form formType={"register"} />
        </BrowserRouter>
      );
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
    test("If the current Form is the register form, the function registerUser from hook should be called", () => {
      render(
        <BrowserRouter>
          <Form formType={"register"} />
        </BrowserRouter>
      );
      const buttonText = "Accept";

      const buttonElement = screen.getByRole("button", { name: buttonText });

      fireEvent.click(buttonElement);

      expect(mockRegisterUser).toHaveBeenCalled();
    });

    test("If the current Form is the login form, the function loginUser from hook should be called", () => {
      render(
        <BrowserRouter>
          <Form formType={"login"} />
        </BrowserRouter>
      );
      const buttonText = "Accept";

      const buttonElement = screen.getByRole("button", { name: buttonText });

      fireEvent.click(buttonElement);

      expect(mockLoginUser).toHaveBeenCalled();
    });

    test("If cancel button is press, user should be taken to /home path", () => {
      render(
        <BrowserRouter>
          <Form formType={"login"} />
        </BrowserRouter>
      );
      const buttonText = "Cancel";

      const buttonElement = screen.getByRole("button", { name: buttonText });

      fireEvent.click(buttonElement);

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });
});
