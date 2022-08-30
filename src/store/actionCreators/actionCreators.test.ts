import { closeModalActionNew, openModalActionNew } from "./actionCreators";

describe("Given a openModal function", () => {
  describe("When called", () => {
    test("It should return an object with the action 'displayUI' and a payload of type IUIModal", () => {
      const ui = {
        isOpen: true,
        message: "showing modal",
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
