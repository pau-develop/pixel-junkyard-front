import "jest-canvas-mock";
import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import ReactCanvas from "./ReactCanvas";
import React from "react";

describe("Given a ReactCanvas component", () => {
  describe("When instantiated on desktop", () => {
    test("It should show a desktop canvas", () => {
      window.innerWidth = 600;

      render(<ReactCanvas />);

      const canvasElement = screen.getByTestId("canvas-desktop");

      expect(canvasElement).not.toBeNull();
    });
  });
});
