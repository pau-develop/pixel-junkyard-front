import { renderHook, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { ITheme } from "../interfaces/interfaces";
import useTheme from "./useTheme";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

beforeEach(() => {
  Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };
});

describe("Given a useTheme hook", () => {
  describe("When its function changeTheme is called", () => {
    test("It should update the state.theme with the received object", async () => {
      const theme: ITheme = {
        primaryColor: "#993d00",
        secondaryColor: "#fff0e6",
        thirdColor: "#000",
        fadeColor: "#000",
        linearGradient: `linear-gradient(90deg, #000 0%, #993d00 50%, #000 100%)`,
        smallBreakPoint: "1400px",
        bigBreakPoint: "2000px",
      };

      const {
        result: {
          current: { changeTheme },
        },
      } = renderHook(useTheme, { wrapper: Wrapper });

      await waitFor(() => {
        changeTheme(theme);
      });

      const expectedAction = {
        payload: {
          primaryColor: "#993d00",
          secondaryColor: "#fff0e6",
          thirdColor: "#000",
          fadeColor: "#000",
          linearGradient: `linear-gradient(90deg, #000 0%, #993d00 50%, #000 100%)`,
          smallBreakPoint: "1400px",
          bigBreakPoint: "2000px",
        },
        type: "theme@change",
      };

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
