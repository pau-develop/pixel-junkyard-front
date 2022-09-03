import { render, screen } from "@testing-library/react";
import mockUser from "../../mocks/mockUser";
import UserCard from "./UserCard";

describe("Given a UserCard component", () => {
  describe("When instantiated", () => {
    test("It should show a heading with the name of the user received via props", () => {
      render(<UserCard user={mockUser} />);

      const headingText = "fakeName";
      const headingElement = screen.getByRole("heading", { name: headingText });

      expect(headingElement).not.toBeNull();
    });
  });
});
