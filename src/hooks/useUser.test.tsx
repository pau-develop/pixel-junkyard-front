import jwt_decode from "jwt-decode";
import { renderHook, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { IUserLoginData, IUserRegisterData } from "../store/types/interfaces";
import useUser from "./useUser";

const token = "12345";
jest.mock("jwt-decode", () => jest.fn());

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
      const mockUser: IUserRegisterData = {
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
      } = renderHook(useUser, {
        wrapper: Wrapper,
      });

      await waitFor(() => {
        registerUser(mockUser);
      });

      expect(global.fetch).toHaveBeenCalled();
    });

    test("If there is an error, the state.ui should be updated", async () => {
      const mockUser: IUserRegisterData = {
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
      } = renderHook(useUser, {
        wrapper: Wrapper,
      });
      await waitFor(() => {
        registerUser(mockUser);
      });

      const newState = {
        isOpen: true,
        message: "ERROR! Username already taken",
        type: "",
        redirect: "",
      };
      const result = store.getState();
      expect(result.ui).toEqual(newState);
    });
  });

  describe("When its function loginUser is called", () => {
    test("It should send the login info to the back and receive a token", async () => {
      const mockUser: IUserLoginData = {
        userName: "mock",
        password: "123",
      };

      const mockToken = "12345";

      const mockResponse = {
        user: { token: mockToken },
      };

      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue(mockResponse),
      });

      (jwt_decode as jest.Mock).mockImplementationOnce(() => ({ token }));

      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(useUser, {
        wrapper: Wrapper,
      });

      await waitFor(() => {
        loginUser(mockUser);
      });

      expect(global.fetch).toHaveBeenCalled();
    });
  });

  describe("When its function logoutUser is called", () => {
    test("It should remove the current user from the localStorage", async () => {
      const mockToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwODYxYzk5MGM3MDlhNmNlYjk0NWQiLCJ1c2VyTmFtZSI6InRlc3RpbmciLCJpYXQiOjE2NjIxMzk1Mzd9.EKxxxoIKOLRRPDR4Uuh-_QmFM8khGF4_-mxbIxjrOpE";
      window.localStorage.setItem("token", mockToken);

      expect(window.localStorage.length).toBe(1);

      const {
        result: {
          current: { logoutUser },
        },
      } = renderHook(useUser, {
        wrapper: Wrapper,
      });

      await waitFor(() => {
        logoutUser();
      });

      expect(window.localStorage.length).toBe(0);
    });
  });
});
