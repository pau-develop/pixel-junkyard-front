import { IUserVisible } from "../../interfaces/interfaces";
import { getAllUsersActionNew } from "../actionCreators/actionCreators";
import usersReducer from "./usersReducer";

describe("Given a uiReducer", () => {
  describe("When its called with a loginUserActionNew", () => {
    test("It should update the store state with the user received as arguments", () => {
      const users: IUserVisible[] = [
        {
          userName: "user1",
        },
        {
          userName: "user2",
        },
      ];

      const action = getAllUsersActionNew(users);
      const result = usersReducer(users, action);

      expect(result).toStrictEqual(users);
    });

    describe("When its called with an unknown action", () => {
      test("It should return its current state", () => {
        const users: IUserVisible[] = [
          {
            userName: "user1",
          },
          {
            userName: "user2",
          },
        ];

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
});
