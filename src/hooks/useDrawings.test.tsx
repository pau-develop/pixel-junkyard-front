import { renderHook, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { IDrawing } from "../interfaces/interfaces";
import mockDrawings from "../mocks/mockDrawings";
import useDrawings from "./useDrawings";

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

describe("Given a useDrawings hook", () => {
  describe("When its function getAllDrawings is called", () => {
    test("It should add all drawings from the DB to the store state", async () => {
      const drawings: IDrawing[] = mockDrawings;
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue(drawings),
      });

      const {
        result: {
          current: { getAllDrawings },
        },
      } = renderHook(useDrawings, { wrapper: Wrapper });

      await waitFor(() => {
        getAllDrawings();
      });

      const expectedAction = { payload: undefined, type: "drawings@all" };
      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When its function getDrawingById is called", () => {
    test("It should add a single drawing from the DB to the store state", async () => {
      const drawing: IDrawing[] = mockDrawings;
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue(drawing),
      });

      const {
        result: {
          current: { getDrawingById },
        },
      } = renderHook(useDrawings, { wrapper: Wrapper });

      const id = "12345";

      await waitFor(() => {
        getDrawingById(id);
      });

      const expectedAction = { payload: [undefined], type: "drawings@id" };
      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
