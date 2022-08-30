import { renderHook, waitFor } from "@testing-library/react";
import UserData from "../interfaces/interface";
import useUsers from "./useUsers";

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

      global.fetch = jest.fn();

      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(useUsers);

      await waitFor(() => {
        registerUser(mockUser);
      });

      expect(global.fetch).toHaveBeenCalled();
    });
  });
});
