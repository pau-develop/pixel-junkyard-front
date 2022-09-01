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
  });
});
