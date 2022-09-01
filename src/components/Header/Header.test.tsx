import { render, screen } from "@testing-library/react";
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

    test("If the currentUser received via props has a userName property, a button should be shown", () => {
      const user: IUser = {
        userName: "testUser",
        token: "123456",
      };
      render(<Header currentUser={user} />);

      const buttonText = user.userName;
      const buttonElement = screen.getByRole("button", { name: buttonText });

      expect(buttonElement).not.toBeNull();
    });
  });
});
