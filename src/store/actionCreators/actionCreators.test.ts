import { IDrawing, IUserVisible } from "../../interfaces/interfaces";
import mockDrawings from "../../mocks/mockDrawings";
import mockUser from "../../mocks/mockUser";
import mockUsers from "../../mocks/mockUsers";
import {
  closeModalActionNew,
  getAllDrawingsActionNew,
  getAllUsersActionNew,
  getDrawingById,
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
        id: "",
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
        id: "",
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
      const user = mockUser;

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
      const user = mockUser;

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

describe("Given a getAllDrawings action", () => {
  describe("When called", () => {
    test("It should return an object with the action 'getAllDrawings' and a payload of type IDrawing", () => {
      const drawings: IDrawing[] = [];

      const expectedResult = {
        type: "drawings@all",
        payload: drawings,
      };

      const result = getAllDrawingsActionNew(drawings);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a getDrawingById action", () => {
  describe("When called", () => {
    test("It should return an object with the action 'getDrawingById' and a payload of type IDrawing[]", () => {
      const drawing: IDrawing[] = mockDrawings;

      const expectedResult = {
        type: "drawings@id",
        payload: drawing,
      };

      const result = getDrawingById(drawing);

      expect(result).toEqual(expectedResult);
    });
  });
});
