import { render, screen } from "@testing-library/react";
import LogoutMenu from "./LogoutMenu";

describe("Given a LogoutMenu component", () => {
  describe("When instantiated", () => {
    test("It should the text 'Do you want to log out?'", () => {
      render(<LogoutMenu menuClass="phone-logout-menu" />);
      const spanElement = screen.getByText("Do you want to log out?");

      expect(spanElement).not.toBeNull();
    });
  });
});
