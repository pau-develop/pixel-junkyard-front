import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import mockUser from "../../mocks/mockUser";
import Header from "./Header";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

beforeEach(() => {
  Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  };
});

describe("Given a Header component", () => {
  describe("When instantiated", () => {
    test("It should show a heading with the text 'Pixel Junkyard'", () => {
      const user = mockUser;
      render(<Header currentUser={user} />, { wrapper: Wrapper });

      const textContent = "Pixel Junkyard";

      const headingElement = screen.getByRole("heading", { name: textContent });

      expect(headingElement).not.toBeNull();
    });

    test("If a user is logged in and we are on mobile, a hamburguer and an 'off 'icon should appear", () => {
      window.innerWidth = 300;
      const user = mockUser;

      render(<Header currentUser={user} />, { wrapper: Wrapper });

      const hamburguerIconElement = screen.getByTestId("hamburger-icon");
      const offIconElement = screen.getByTestId("off-icon");

      expect(hamburguerIconElement).not.toBeNull();
      expect(offIconElement).not.toBeNull();
    });

    test("If user clicks on the hamburguer button, a menu should appear with four naviation buttons", () => {
      window.innerWidth = 300;
      const user = mockUser;
      render(<Header currentUser={user} />, { wrapper: Wrapper });
      const iconElement = screen.getByTestId("hamburger-icon");

      fireEvent.click(iconElement);

      const profileButtonElement = screen.getAllByRole("button", {
        name: "PROFILE",
      });

      expect(profileButtonElement).not.toBeNull();
    });

    test("If any of the four navigation buttons are pressed, the menu and the buttons should disappear", () => {
      window.innerWidth = 599;
      const user = mockUser;
      render(<Header currentUser={user} />, { wrapper: Wrapper });
      const iconElement = screen.getByTestId("hamburger-icon");

      fireEvent.click(iconElement);

      const profileButtonElement = screen.getAllByRole("button", {
        name: "PROFILE",
      });

      fireEvent.click(profileButtonElement[1]);

      expect(profileButtonElement[1]).not.toBeInTheDocument();
    });

    test("But only if window width is less than", () => {
      window.innerWidth = 600;
      const user = mockUser;
      render(<Header currentUser={user} />, { wrapper: Wrapper });
      const iconElement = screen.getByTestId("hamburger-icon");

      fireEvent.click(iconElement);

      const profileButtonElement = screen.getAllByRole("button", {
        name: "PROFILE",
      });

      fireEvent.click(profileButtonElement[1]);

      expect(profileButtonElement[1]).toBeInTheDocument();
    });

    test("If user clicks on the 'off' button, a menu should appear with a 'Do you want to log out?' text", () => {
      window.innerWidth = 300;
      const user = mockUser;
      render(<Header currentUser={user} />, { wrapper: Wrapper });
      const iconElement = screen.getByTestId("off-icon");

      fireEvent.click(iconElement);

      const okButtonElement = screen.getAllByRole("button", {
        name: "OK",
      });

      expect(okButtonElement).not.toBeNull();
    });
  });
});
