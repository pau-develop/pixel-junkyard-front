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
        getAllDrawings(0, 4, "");
      });

      const expectedAction = { payload: undefined, type: "drawings@all" };
      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When its function getDrawingById is called", () => {
    test("It should add a single drawing from the DB to the store state", async () => {
      const response = {
        drawing: {
          id: "1",
          name: "mockDraw",
          description: "",
          image: "",
          artist: "",
          artistName: "",
          resolution: "",
          creationDate: "",
        },
      };
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue(response),
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

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When its function createDrawing is called", () => {
    test("It should send FormData passed as arguments to the DB", async () => {
      const drawing = mockDrawings[0];
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue(drawing),
      });
      const {
        result: {
          current: { createDrawing },
        },
      } = renderHook(useDrawings, { wrapper: Wrapper });
      await waitFor(() => {
        createDrawing(mockDrawings[0]);
      });
      expect(global.fetch).toHaveBeenCalled();
    });

    test("If there is an error, the state.ui should be updated", async () => {
      const error = { error: "ERROR! Something went wrong" };
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue(error),
      });
      const {
        result: {
          current: { createDrawing },
        },
      } = renderHook(useDrawings, { wrapper: Wrapper });
      await waitFor(() => {
        createDrawing(mockDrawings[0]);
      });
      const actionToDispatch = {
        payload: {
          isOpen: true,
          message: "ERROR! Something went wrong",
          redirect: "",
          type: "confirm",
          id: "",
        },
        type: "ui@display",
      };
      expect(mockDispatch).toBeCalledWith(actionToDispatch);
    });
  });

  describe("When its function deleteDrawing is called", () => {
    test("It should delete the IDrawing passed as arguments from the DB", async () => {
      const drawing: IDrawing = mockDrawings[0];
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue({
          message: `Succesfully deleted the Drawing with ID ${drawing.id}`,
        }),
      });

      const {
        result: {
          current: { deleteDrawing },
        },
      } = renderHook(useDrawings, { wrapper: Wrapper });
      await waitFor(() => {
        deleteDrawing(mockDrawings[0]);
      });

      expect(global.fetch).toHaveBeenCalled();
    });

    test("If there is an error, the state.ui should be updated", async () => {
      const error = { error: "ERROR! Something went wrong" };
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue(error),
      });
      const {
        result: {
          current: { deleteDrawing },
        },
      } = renderHook(useDrawings, { wrapper: Wrapper });
      await waitFor(() => {
        deleteDrawing(mockDrawings[0]);
      });
      const actionToDispatch = {
        payload: {
          isOpen: true,
          message: "ERROR! Something went wrong",
          redirect: "",
          type: "confirm",
          id: "",
        },
        type: "ui@display",
      };
      expect(mockDispatch).toBeCalledWith(actionToDispatch);
    });
  });
});
