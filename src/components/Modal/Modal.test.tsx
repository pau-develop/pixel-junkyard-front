import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../../app/store";
import Modal from "./Modal";

const mockDeleteAccount = jest.fn();

jest.mock("../../hooks/useUser", () => () => {
  // Require the original module to not be mocked...
  const originalModule = jest.requireActual("../../hooks/useUser");
  return {
    __esModule: true, // Use it when dealing with esModules
    ...originalModule,
    deleteAccount: () => mockDeleteAccount(),
  };
});

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

beforeEach(() => {
  Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given a Modal component", () => {
  describe("When instantiated", () => {
    test("It should show a paragraph text passed via props", () => {
      render(
        <BrowserRouter>
          <Modal message="test paragraph" redirect="" />
        </BrowserRouter>,
        {
          wrapper: Wrapper,
        }
      );

      const paragraphText = "test paragraph";
      const paragraphElement = screen.getByText(paragraphText);

      expect(paragraphElement).not.toBeNull();
    });

    test("It should show an 'OK' button and when clicked it should change the store state.ui", () => {
      render(
        <BrowserRouter>
          <Modal message="test paragraph" type="confirm" redirect="" />
        </BrowserRouter>,
        {
          wrapper: Wrapper,
        }
      );
      const buttonText = "OK";
      const buttonElement = screen.getByRole("button", { name: buttonText });

      fireEvent.click(buttonElement);

      const newState = {
        isOpen: false,
        message: "",
        type: "confirm",
        redirect: "",
        id: "",
      };
      const result = store.getState();
      expect(result.ui).toEqual(newState);
    });

    test("if the Modal has type autofade, and redirect string is not empty, it should run a counter function and redirect", () => {
      jest.useFakeTimers();
      jest.spyOn(global, "setInterval");
      render(
        <BrowserRouter>
          <Modal message="test paragraph" type="autofade" redirect="/home" />
        </BrowserRouter>,
        { wrapper: Wrapper }
      );
      jest.advanceTimersByTime(3000);
      expect(setInterval).toHaveBeenCalled();
      expect(mockUseNavigate).toHaveBeenCalled();
    });

    test("if the Modal has type autofade, and redirect string is empty, it should run a counter function and close itself", () => {
      jest.useFakeTimers();
      jest.spyOn(global, "setInterval");
      render(
        <BrowserRouter>
          <Modal message="test paragraph" type="autofade" redirect="" />
        </BrowserRouter>,
        { wrapper: Wrapper }
      );
      jest.advanceTimersByTime(3000);
      expect(setInterval).toHaveBeenCalled();
      expect(mockUseNavigate).not.toHaveBeenCalled();
    });

    test("if the Modal has the type 'delete', it should the buttons cancel & accep'", () => {
      render(
        <BrowserRouter>
          <Modal
            message="test paragraph"
            type="delete"
            redirect="/home"
            id="1"
          />
        </BrowserRouter>,
        { wrapper: Wrapper }
      );

      const buttonCancelText = "Cancel";
      const buttonAcceptText = "Accept";

      const buttonCancelElement = screen.getByRole("button", {
        name: buttonCancelText,
      });
      const buttonAcceptElement = screen.getByRole("button", {
        name: buttonAcceptText,
      });

      expect(buttonCancelElement).not.toBeNull();
      expect(buttonAcceptElement).not.toBeNull();
    });

    test("And upon clicking accept button, deleteAccount function should be called", async () => {
      render(
        <BrowserRouter>
          <Modal
            message="test paragraph"
            type="delete"
            redirect="/home"
            id="1"
          />
        </BrowserRouter>,
        { wrapper: Wrapper }
      );

      const buttonAcceptText = "Accept";

      const buttonAcceptElement = screen.getByRole("button", {
        name: buttonAcceptText,
      });

      await fireEvent.click(buttonAcceptElement);

      expect(mockDeleteAccount).toHaveBeenCalled();
    });

    test("if the Modal has type delay, it should wait for 0.75 seconds before rendering the modal", () => {
      jest.useFakeTimers();
      jest.spyOn(global, "setInterval");
      render(
        <BrowserRouter>
          <Modal message="Please wait..." type="delay" redirect="" />
        </BrowserRouter>,
        { wrapper: Wrapper }
      );
      jest.advanceTimersByTime(750);
      expect(setInterval).toHaveBeenCalled();
    });
  });
});
