import { render, screen } from "@testing-library/react";
import CommunityPage from "./CommunityPage";

describe("Given a CommunityPage component", () => {
  describe("When instantiated", () => {
    test("It should show a heading with the text 'Community'", () => {
      render(<CommunityPage />);
      const headingText = "Community";
      const headingElement = screen.getByRole("heading", { name: headingText });

      expect(headingElement).not.toBeNull();
    });
  });
});
