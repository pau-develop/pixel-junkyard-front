import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { IUser } from "../../interfaces/interfaces";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When instantiated", () => {
    test("It should show a heading with the text 'Pixel Junkyard'", () => {
      const user: IUser = {
        userName: "",
        token: "",
      };
      render(<Header currentUser={user} />);

      const textContent = "Pixel Junkyard";

      const headingElement = screen.getByRole("heading", { name: textContent });

      expect(headingElement).not.toBeNull();
    });

    test("If the currentUser received via props has a userName property, a button with the userName should be shown", () => {
      const user: IUser = {
        userName: "testUser",
        token: "123456",
      };
      render(<Header currentUser={user} />);

      const iconElement = screen.getByTestId("icon-element");

      expect(iconElement).not.toBeNull();
    });

    test("If user clicks on userName button, a menu should appear with four naviation buttons", () => {
      const user: IUser = {
        userName: "testUser",
        token: "123456",
      };
      render(
        <BrowserRouter>
          <Header currentUser={user} />
        </BrowserRouter>
      );
      const iconElement = screen.getByTestId("icon-element");

      fireEvent.click(iconElement);

      const profileButtonElement = screen.getByRole("button", {
        name: "PROFILE",
      });

      expect(profileButtonElement).not.toBeNull();
    });

    test("If any of the four navigation buttons are pressed, the menu and the buttons should disappear", () => {
      const user: IUser = {
        userName: "testUser",
        token: "123456",
      };
      render(
        <BrowserRouter>
          <Header currentUser={user} />
        </BrowserRouter>
      );
      const iconElement = screen.getByTestId("icon-element");

      fireEvent.click(iconElement);

      const profileButtonElement = screen.getByRole("button", {
        name: "PROFILE",
      });

      fireEvent.click(profileButtonElement);

      expect(profileButtonElement).not.toBeInTheDocument();
    });
  });
});
