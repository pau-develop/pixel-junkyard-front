import { ITheme } from "../../interfaces/interfaces";
import { changeThemeActionNew } from "../actionCreators/actionCreators";
import themeReducer from "./themeReducer";

describe("Given a themeReducer", () => {
  describe("When its called with a changeThemeActionNew", () => {
    test("It should update the store state with the object received as arguments", () => {
      const theme: ITheme = {
        primaryColor: "#993d00",
        secondaryColor: "#fff0e6",
        thirdColor: "#000",
        linearGradient: `linear-gradient(90deg, #000 0%, #993d00 50%, #000 100%)`,
        smallBreakPoint: "1400px",
        bigBreakPoint: "2000px",
      };

      const action = changeThemeActionNew(theme);
      const result = themeReducer(theme, action);

      expect(result).toStrictEqual(theme);
    });
  });
  describe("When its called with an unknown action", () => {
    test("It should return its current state", () => {
      const theme: ITheme = {
        primaryColor: "#993d00",
        secondaryColor: "#fff0e6",
        thirdColor: "#000",
        linearGradient: `linear-gradient(90deg, #000 0%, #993d00 50%, #000 100%)`,
        smallBreakPoint: "1400px",
        bigBreakPoint: "2000px",
      };

      const action = changeThemeActionNew(theme);
      const result = themeReducer(theme, action);

      expect(result).toStrictEqual(theme);

      const unknownAction = {
        type: "unknown",
      };
      const newResult = themeReducer(theme, unknownAction);

      expect(newResult).toStrictEqual(theme);
    });
  });
});
