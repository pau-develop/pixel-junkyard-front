import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import mockUser from "../../mocks/mockUser";
import Header from "./Header";

interface AnimateProps {
  children: JSX.Element | JSX.Element[];
}

jest.mock("framer-motion", () => {
  const actual = jest.requireActual("framer-motion");
  return {
    __esModule: true,
    ...actual,
    AnimatePresence: ({ children }: AnimateProps) => (
      <div className="mocked-framer-motion-AnimatePresence">{children}</div>
    ),
    motion: {
      ...actual.motion,
      div: ({ children }: AnimateProps) => (
        <div className="mocked-framer-motion-div">{children}</div>
      ),
    },
  };
});

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

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

describe("Given a Header component", () => {
  describe("When instantiated", () => {
    test("It should show a heading with the text 'Pixel Junkyard'", () => {
      const user = mockUser;
      render(<Header currentUser={user} />, { wrapper: Wrapper });

      const textContent = "Pixel Junkyard";

      const headingElement = screen.getByRole("heading", { name: textContent });

      expect(headingElement).not.toBeNull();
    });

    test("If a user is logged in and we are on mobile, a hamburguer icon, an 'off 'icon and a palette icon should appear", () => {
      window.innerWidth = 300;
      const user = mockUser;

      render(<Header currentUser={user} />, { wrapper: Wrapper });

      const hamburguerIconElement = screen.getByTestId("hamburger-icon");
      const offIconElement = screen.getByTestId("off-icon");
      const paletteIconElement = screen.getByTestId("palette-icon");

      expect(hamburguerIconElement).not.toBeNull();
      expect(offIconElement).not.toBeNull();
      expect(paletteIconElement).not.toBeNull();
    });

    test("If user clicks on the palette button, a menu should appear with different themes to choose from", () => {
      window.innerWidth = 300;
      const user = mockUser;
      render(<Header currentUser={user} />, { wrapper: Wrapper });
      const iconElement = screen.getByTestId("palette-icon");

      fireEvent.click(iconElement);

      const listItems = screen.getAllByRole("listitem");

      expect(listItems[0]).not.toBeNull();
    });

    test("If user clicks on the hamburguer button, a menu should appear with four naviation buttons", () => {
      window.innerWidth = 300;
      const user = mockUser;
      render(<Header currentUser={user} />, { wrapper: Wrapper });
      const iconElement = screen.getByTestId("hamburger-icon");

      fireEvent.click(iconElement);

      const profileButtonElement = screen.getAllByRole("button", {
        name: "PROFILE",
      });

      expect(profileButtonElement).not.toBeNull();
    });

    test("If any of the four navigation buttons are pressed, the menu and the buttons should disappear", () => {
      window.innerWidth = 599;
      const user = mockUser;
      render(<Header currentUser={user} />, { wrapper: Wrapper });
      const iconElement = screen.getByTestId("hamburger-icon");

      fireEvent.click(iconElement);

      const profileButtonElement = screen.getAllByRole("button", {
        name: "PROFILE",
      });

      fireEvent.click(profileButtonElement[1]);

      expect(profileButtonElement[1]).not.toBeInTheDocument();
    });

    test("But only if window width is less than", () => {
      window.innerWidth = 600;
      const user = mockUser;
      render(<Header currentUser={user} />, { wrapper: Wrapper });
      const iconElement = screen.getByTestId("hamburger-icon");

      fireEvent.click(iconElement);

      const profileButtonElement = screen.getAllByRole("button", {
        name: "PROFILE",
      });

      fireEvent.click(profileButtonElement[1]);

      expect(profileButtonElement[1]).toBeInTheDocument();
    });

    test("If user clicks on the 'off' button, a menu should appear with a 'Do you want to log out?' text", () => {
      window.innerWidth = 300;
      const user = mockUser;
      render(<Header currentUser={user} />, { wrapper: Wrapper });
      const iconElement = screen.getByTestId("off-icon");

      fireEvent.click(iconElement);

      const okButtonElement = screen.getAllByRole("button", {
        name: "OK",
      });

      expect(okButtonElement).not.toBeNull();
    });

    test("If Header title is clicked, it should redirect the user to /home", () => {
      const user = mockUser;
      render(<Header currentUser={user} />, { wrapper: Wrapper });

      const textContent = "Pixel Junkyard";

      const headingElement = screen.getByRole("heading", { name: textContent });

      fireEvent.click(headingElement);

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });
});
