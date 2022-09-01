import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Menu from "./Menu";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Given a Menu component", () => {
  describe("When instantiated", () => {
    test("It should show four navigation buttons", () => {
      render(
        <BrowserRouter>
          <Menu action={() => null} />
        </BrowserRouter>
      );

      const profileButtonText = "PROFILE";
      const communityButtonText = "COMMUNITY";
      const galleryButtonText = "GALLERY";
      const drawButtonText = "DRAW";

      const profileButton = screen.getByRole("button", {
        name: profileButtonText,
      });
      const communityButton = screen.getByRole("button", {
        name: communityButtonText,
      });
      const galleryButton = screen.getByRole("button", {
        name: galleryButtonText,
      });
      const drawButton = screen.getByRole("button", { name: drawButtonText });

      expect(profileButton).not.toBeNull();
      expect(communityButton).not.toBeNull();
      expect(galleryButton).not.toBeNull();
      expect(drawButton).not.toBeNull();
    });

    test("When clicking on  profile button, it should send the user to the path /profile", async () => {
      render(
        <BrowserRouter>
          <Menu action={() => null} />
        </BrowserRouter>
      );

      const profileButtonText = "PROFILE";

      const profileButton = screen.getByRole("button", {
        name: profileButtonText,
      });

      fireEvent.click(profileButton);

      expect(mockUseNavigate).toHaveBeenCalled();
    });

    test("When clicking on community button, it should send the user to the path /community", async () => {
      render(
        <BrowserRouter>
          <Menu action={() => null} />
        </BrowserRouter>
      );

      const communityButtonText = "COMMUNITY";

      const communityButton = screen.getByRole("button", {
        name: communityButtonText,
      });

      fireEvent.click(communityButton);

      expect(mockUseNavigate).toHaveBeenCalled();
    });

    test("When clicking on draw button, it should send the user to the path /draw", async () => {
      render(
        <BrowserRouter>
          <Menu action={() => null} />
        </BrowserRouter>
      );

      const drawButtonText = "DRAW";

      const drawButton = screen.getByRole("button", {
        name: drawButtonText,
      });

      fireEvent.click(drawButton);

      expect(mockUseNavigate).toHaveBeenCalled();
    });

    test("When clicking on gallery button, it should send the user to the path /draw", async () => {
      render(
        <BrowserRouter>
          <Menu action={() => null} />
        </BrowserRouter>
      );

      const galleryButtonText = "GALLERY";

      const galleryButton = screen.getByRole("button", {
        name: galleryButtonText,
      });

      fireEvent.click(galleryButton);

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });
});
