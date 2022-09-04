import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import mockUser from "../../mocks/mockUser";
import UserCard from "./UserCard";

describe("Given a UserCard component", () => {
  describe("When instantiated", () => {
    test("It should show a heading with the name of the user received via props", () => {
      render(
        <BrowserRouter>
          <UserCard user={mockUser} />
        </BrowserRouter>
      );

      const headingText = "fakeName";
      const headingElement = screen.getByRole("heading", { name: headingText });

      expect(headingElement).not.toBeNull();
    });
  });
});
