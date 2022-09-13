import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Profile from "./Profile";
import { BrowserRouter } from "react-router-dom";
import mockStore from "../../mocks/mockStore";
import { configureStore, createReducer } from "@reduxjs/toolkit";
import { IUserVisible } from "../../interfaces/interfaces";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),

  useLocation: () => ({
    pathname: "/profile/6310861c990c709a6ceb945d",
  }),
  useParams: () => jest.fn().mockReturnValue("12345"),
  useNavigate: () => mockUseNavigate,
}));

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return (
    <BrowserRouter>
      <Provider store={mockStore}>{children}</Provider>
    </BrowserRouter>
  );
};
interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

describe("Given a Profile component", () => {
  describe("When instantiated", () => {
    test("It should conditionally render 'edit' and 'delete' buttons depending on current path", async () => {
      await render(<Profile />, { wrapper: Wrapper });

      const buttonText = "Edit avatar";
      const buttonElement = screen.getByRole("button", { name: buttonText });

      expect(buttonElement).not.toBeNull();
    });

    test("When clicking on delete account button, a new ui should be dispatched", async () => {
      await render(<Profile />, { wrapper: Wrapper });

      const buttonText = "Delete account";
      const buttonElement = screen.getByRole("button", { name: buttonText });

      fireEvent.click(buttonElement);

      expect(mockDispatch).toHaveBeenCalled();
    });

    test("It should render a listitems for each element in drawings array", async () => {
      await render(<Profile />, { wrapper: Wrapper });

      const drawElement = screen.getByText("test1");

      expect(drawElement).toBeInTheDocument();
    });

    test("Upon clicking on Edit avatar, it should redirect the user to /avatar path", async () => {
      await render(<Profile />, { wrapper: Wrapper });

      const buttonText = "Edit avatar";
      const buttonElement = screen.getByRole("button", { name: buttonText });

      fireEvent.click(buttonElement);

      expect(mockUseNavigate).toHaveBeenCalled();
    });

    test("If the user has drawn an avatar, it should be shown on the img tag instead of the default image", () => {
      const initialState = [
        {
          id: "12345",
          userName: "test",
          password: "12345",
          email: "fake@fake.com",
          avatar: "new-avatar",
          drawings: [],
        },
      ];

      const mockUsersReducer = createReducer<IUserVisible[]>(
        initialState,
        (builder) => {
          builder.addDefaultCase((state: IUserVisible[]) => state);
        }
      );

      const mockStoreUser = configureStore({
        reducer: {
          users: mockUsersReducer,
        },
      });

      Wrapper = ({ children }: WrapperProps): JSX.Element => {
        return (
          <BrowserRouter>
            <Provider store={mockStoreUser}>{children}</Provider>
          </BrowserRouter>
        );
      };

      render(<Profile />, { wrapper: Wrapper });
      const image = screen.getByAltText("test") as HTMLImageElement;
      expect(image.src).toContain(initialState[0].avatar);
    });
  });
});
