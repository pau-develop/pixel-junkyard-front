import { renderHook, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { UserData } from "../store/types/interfaces";
import useUsers from "./useUsers";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

beforeEach(() => {
  Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };
});

describe("Given a useUsers hook", () => {
  describe("When its function registerUser is called", () => {
    test("It should send the user info passed as arguments to the DB", async () => {
      const mockUser: UserData = {
        userName: "mock",
        password: "123",
        email: "mock@mock.com",
      };

      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue(mockUser),
      });

      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(useUsers, {
        wrapper: Wrapper,
      });

      await waitFor(() => {
        registerUser(mockUser);
      });

      expect(global.fetch).toHaveBeenCalled();
    });

    test("If there is an error, the state.ui should be updated", async () => {
      const mockUser: UserData = {
        userName: "mock",
        password: "123",
        email: "mock@mock.com",
      };
      const error = { error: "ERROR! Username already taken" };
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue(error),
      });
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(useUsers, {
        wrapper: Wrapper,
      });
      await waitFor(() => {
        registerUser(mockUser);
      });

      const newState = {
        ui: {
          isOpen: true,
          message: "ERROR! Username already taken",
        },
      };
      const result = store.getState();
      expect(result).toEqual(newState);
    });
  });
});
