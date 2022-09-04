import mockUser from "../../mocks/mockUser";
import {
  loginUserActionNew,
  logoutUserActionNew,
} from "../actionCreators/actionCreators";
import userReducer from "./userReducer";

describe("Given a uiReducer", () => {
  describe("When its called with a loginUserActionNew", () => {
    test("It should update the store state with the user received as arguments", () => {
      const user = mockUser;

      const action = loginUserActionNew(user);
      const result = userReducer(user, action);

      expect(result).toStrictEqual(user);
    });
  });

  describe("When its called with a logoutUserActionNew", () => {
    test("It should update the store state with the user received as arguments", () => {
      const user = mockUser;

      const action = logoutUserActionNew(user);
      const result = userReducer(user, action);

      expect(result).toStrictEqual(user);
    });
  });

  describe("When its called with an unknown action", () => {
    test("It should return its current state", () => {
      const user = mockUser;

      const action = loginUserActionNew(user);
      const result = userReducer(user, action);

      expect(result).toStrictEqual(user);

      const unknownAction = {
        type: "unknown",
      };
      const newResult = userReducer(user, unknownAction);

      expect(newResult).toStrictEqual(user);
    });
  });
});
