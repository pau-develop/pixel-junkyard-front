import { IUser } from "../../interfaces/interfaces";
import { loginUserActionNew } from "../actionCreators/actionCreators";
import userReducer from "./userReducer";

describe("Given a uiReducer", () => {
  describe("When its called with a openModalActionNew", () => {
    test("It should update the store state with the IUIModal received as arguments", () => {
      const user: IUser = {
        userName: "pau",
        token: "123456",
      };

      const action = loginUserActionNew(user);
      const result = userReducer(user, action);

      expect(result).toStrictEqual(user);
    });
  });

  describe("When its called with an unknown action", () => {
    test("It should return its current state", () => {
      const user: IUser = {
        userName: "pau",
        token: "123456",
      };

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
