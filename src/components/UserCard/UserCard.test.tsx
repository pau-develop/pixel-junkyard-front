import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import mockUserVisible from "../../mocks/mockUserVisible";
import UserCard from "./UserCard";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Given a UserCard component", () => {
  describe("When instantiated", () => {
    test("It should show a heading with the name of the user received via props", () => {
      render(
        <BrowserRouter>
          <UserCard user={mockUserVisible} />
        </BrowserRouter>
      );

      const headingText = "fakeName";
      const headingElement = screen.getByRole("heading", { name: headingText });

      expect(headingElement).not.toBeNull();
    });

    test("Upon clicking a card, user should be redirected to Profile page", () => {
      render(
        <BrowserRouter>
          <UserCard user={mockUserVisible} />
        </BrowserRouter>
      );
      const cardElement = screen.getByRole("article");

      fireEvent.click(cardElement);

      expect(mockUseNavigate).toHaveBeenCalled();
    });

    test("If the user has drawn an avatar, it should be shown on the img tag instead of the default image", () => {
      const mockUser = {
        id: "12345",
        userName: "fakeName",
        password: "12345",
        email: "fake@fake.com",
        avatar: "user-avatar",
        drawings: [],
      };

      render(
        <BrowserRouter>
          <UserCard user={mockUser} />
        </BrowserRouter>
      );

      const image = screen.getByAltText(mockUser.userName) as HTMLImageElement;

      expect(image.src).toContain(mockUser.avatar);
    });
  });
});
