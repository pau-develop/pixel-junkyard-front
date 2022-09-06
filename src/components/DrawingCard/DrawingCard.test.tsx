import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import mockDrawings from "../../mocks/mockDrawings";
import DrawingCard from "./DrawingCard";

describe("Given a DrawingCard component", () => {
  describe("When instantiated", () => {
    test("It should the title of the drawing received as props", () => {
      render(
        <BrowserRouter>
          <DrawingCard draw={mockDrawings[0]} />
        </BrowserRouter>
      );

      const drawTitle = "mockDraw";
      const spanElement = screen.getByText(drawTitle);

      expect(spanElement).not.toBeNull();
    });
  });
});
