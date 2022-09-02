import {
  closeModalActionNew,
  openModalActionNew,
} from "../actionCreators/actionCreators";
import uiReducer from "./uiReducer";

describe("Given a uiReducer", () => {
  describe("When its called with a openModalActionNew", () => {
    test("It should update the store state with the IUIModal received as arguments", () => {
      const ui = {
        isOpen: true,
        message: "modal is open",
        type: "",
        redirect: "",
      };

      const action = openModalActionNew(ui);
      const result = uiReducer(ui, action);

      expect(result).toStrictEqual(ui);
    });
  });

  describe("When its called with a closeModalActionNew", () => {
    test("It should update the store state with the IUIModal received as arguments", () => {
      const ui = {
        isOpen: false,
        message: "modal is closed",
        type: "",
        redirect: "",
      };

      const action = closeModalActionNew(ui);
      const result = uiReducer(ui, action);

      expect(result).toStrictEqual(ui);
    });
  });

  describe("When its called with an unknown action", () => {
    test("It should return its current state", () => {
      const ui = {
        isOpen: false,
        message: "modal is closed",
        type: "",
        redirect: "",
      };

      const action = closeModalActionNew(ui);
      const result = uiReducer(ui, action);

      expect(result).toStrictEqual(ui);

      const unknownAction = {
        type: "unknown",
      };
      const newResult = uiReducer(ui, unknownAction);

      expect(newResult).toStrictEqual(ui);
    });
  });
});
