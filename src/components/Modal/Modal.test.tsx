import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import Modal from "./Modal";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

beforeEach(() => {
  Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };
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

    test("if the Modal has a redirect, it should run a counter function", () => {
      jest.useFakeTimers();
      jest.spyOn(global, "setInterval");
      render(
        <BrowserRouter>
          <Modal message="test paragraph" type="confirm" redirect="/home" />
        </BrowserRouter>,
        { wrapper: Wrapper }
      );
      jest.advanceTimersByTime(3000);
      expect(setInterval).toHaveBeenCalled();
    });
  });
});
