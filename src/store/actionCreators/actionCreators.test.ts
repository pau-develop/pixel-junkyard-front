import { IUser, IUserVisible } from "../../interfaces/interfaces";
import mockUsers from "../../mocks/mockUsers";
import {
  closeModalActionNew,
  getAllUsersActionNew,
  getUserByIdActionNew,
  loginUserActionNew,
  logoutUserActionNew,
  openModalActionNew,
} from "./actionCreators";

describe("Given a openModal function", () => {
  describe("When called", () => {
    test("It should return an object with the action 'displayUI' and a payload of type IUIModal", () => {
      const ui = {
        isOpen: true,
        message: "showing modal",
        type: "",
        redirect: "",
      };

      const expectedResult = {
        type: "ui@display",
        payload: ui,
      };

      const result = openModalActionNew(ui);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a closeModal function", () => {
  describe("When called", () => {
    test("It should return an object with the action 'hideUI' and a payload of type IUIModal", () => {
      const ui = {
        isOpen: false,
        message: "",
        type: "",
        redirect: "",
      };

      const expectedResult = {
        type: "ui@hide",
        payload: ui,
      };

      const result = closeModalActionNew(ui);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a loginUser function", () => {
  describe("When called", () => {
    test("It should return an object with the action 'loginUser' and a payload of type IUser", () => {
      const user: IUser = {
        userName: "pau",
        token: "123456",
      };

      const expectedResult = {
        type: "user@login",
        payload: user,
      };

      const result = loginUserActionNew(user);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a logoutUser function", () => {
  describe("When called", () => {
    test("It should return an object with the action 'loginUser' and a payload of type IUser", () => {
      const user: IUser = {
        userName: "",
        token: "",
      };

      const expectedResult = {
        type: "user@logout",
        payload: user,
      };

      const result = logoutUserActionNew(user);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a getAllUsers action", () => {
  describe("When called", () => {
    test("It should return an object with the action 'loginUser' and a payload of type IUser", () => {
      const users: IUserVisible[] = mockUsers;

      const expectedResult = {
        type: "users@all",
        payload: users,
      };

      const result = getAllUsersActionNew(users);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a getUserById action", () => {
  describe("When called", () => {
    test("It should return an object with the action 'getUserById' and a payload of type IUser", () => {
      const user: IUserVisible[] = [
        {
          _id: "",
          userName: "",
          password: "",
          email: "",
        },
      ];

      const expectedResult = {
        type: "users@id",
        payload: user,
      };

      const result = getUserByIdActionNew(user);

      expect(result).toEqual(expectedResult);
    });
  });
});
