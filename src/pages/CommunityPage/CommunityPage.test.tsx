import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import CommunityPage from "./CommunityPage";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

beforeEach(() => {
  Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  };
});

describe("Given a CommunityPage component", () => {
  describe("When instantiated", () => {
    test("It should show a heading with the text 'Community'", () => {
      render(<CommunityPage />, { wrapper: Wrapper });
      const headingText = "Community";
      const headingElement = screen.getByRole("heading", { name: headingText });

      expect(headingElement).not.toBeNull();
    });
  });
});
