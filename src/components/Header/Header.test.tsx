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

    test("If a user is logged in and we are on mobile, a hamburguer icon should appear", () => {
      window.innerWidth = 300;
      const user: IUser = {
        userName: "testUser",
        token: "123456",
      };
      render(
        <BrowserRouter>
          <Header currentUser={user} />
        </BrowserRouter>
      );

      const iconElement = screen.getByTestId("hamburger-icon");

      expect(iconElement).not.toBeNull();
    });

    test("If user clicks on the hamburguer button, a menu should appear with four naviation buttons", () => {
      window.innerWidth = 300;
      const user: IUser = {
        userName: "testUser",
        token: "123456",
      };
      render(
        <BrowserRouter>
          <Header currentUser={user} />
        </BrowserRouter>
      );
      const iconElement = screen.getByTestId("hamburger-icon");

      fireEvent.click(iconElement);

      const profileButtonElement = screen.getAllByRole("button", {
        name: "PROFILE",
      });

      expect(profileButtonElement).not.toBeNull();
    });

    test("If any of the four navigation buttons are pressed, the menu and the buttons should disappear", () => {
      window.innerWidth = 599;
      const user: IUser = {
        userName: "testUser",
        token: "123456",
      };
      render(
        <BrowserRouter>
          <Header currentUser={user} />
        </BrowserRouter>
      );
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
      const user: IUser = {
        userName: "testUser",
        token: "123456",
      };
      render(
        <BrowserRouter>
          <Header currentUser={user} />
        </BrowserRouter>
      );
      const iconElement = screen.getByTestId("hamburger-icon");

      fireEvent.click(iconElement);

      const profileButtonElement = screen.getAllByRole("button", {
        name: "PROFILE",
      });

      fireEvent.click(profileButtonElement[1]);

      expect(profileButtonElement[1]).toBeInTheDocument();
    });
  });
});
