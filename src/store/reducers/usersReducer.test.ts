import { IUserVisible } from "../../interfaces/interfaces";
import mockUserVisible from "../../mocks/mockUserVisible";
import mockUsers from "../../mocks/mockUsers";
import {
  getAllUsersActionNew,
  getUserByIdActionNew,
} from "../actionCreators/actionCreators";
import usersReducer from "./usersReducer";

describe("Given a uiReducer", () => {
  describe("When its called with a getAllUsersActionNew", () => {
    test("It should update the store state with the user received as arguments", () => {
      const users: IUserVisible[] = mockUsers;

      const action = getAllUsersActionNew(users);
      const result = usersReducer(users, action);

      expect(result).toStrictEqual(users);
    });

    describe("When its called with an unknown action", () => {
      test("It should return its current state", () => {
        const users: IUserVisible[] = mockUsers;

        const action = getAllUsersActionNew(users);
        const result = usersReducer(users, action);

        expect(result).toStrictEqual(users);

        const unknownAction = {
          type: "unknown",
        };
        const newResult = usersReducer(users, unknownAction);

        expect(newResult).toStrictEqual(users);
      });
    });
  });

  describe("When its called with a getUserById action", () => {
    test("It should update the store state with the user received as arguments", () => {
      const user: IUserVisible[] = [mockUserVisible];

      const action = getUserByIdActionNew(user);
      const result = usersReducer(user, action);

      expect(result).toStrictEqual(user);
    });

    describe("When its called with an unknown action", () => {
      test("It should return its current state", () => {
        const user: IUserVisible[] = [mockUserVisible];

        const action = getUserByIdActionNew(user);
        const result = usersReducer(user, action);

        expect(result).toStrictEqual(user);

        const unknownAction = {
          type: "unknown",
        };
        const newResult = usersReducer(user, unknownAction);

        expect(newResult).toStrictEqual(user);
      });
    });
  });
});
