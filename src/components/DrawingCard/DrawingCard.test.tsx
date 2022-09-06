import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import mockDrawings from "../../mocks/mockDrawings";
import DrawingCard from "./DrawingCard";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

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

    test("And when an image is clicked, useNavigate should be called", () => {
      render(
        <BrowserRouter>
          <DrawingCard draw={mockDrawings[0]} />
        </BrowserRouter>
      );
      const image = screen.getByAltText("mockDraw");

      fireEvent.click(image);

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });
});
