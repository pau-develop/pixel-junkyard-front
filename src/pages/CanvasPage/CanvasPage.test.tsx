import "jest-canvas-mock";
import { render, screen } from "@testing-library/react";
import CanvasPage from "./CanvasPage";

describe("Given a CanvasPage component", () => {
  describe("When instantiated", () => {
    test("It should show a heading with the text 'Canvas'", () => {
      render(<CanvasPage />);

      const headingText = "Canvas";
      const headingElement = screen.getByRole("heading", { name: headingText });

      expect(headingElement).not.toBeNull();
    });
  });
});
