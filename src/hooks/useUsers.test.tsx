import { renderHook, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { IUserVisible } from "../interfaces/interfaces";
import mockUsers from "../mocks/mockUsers";
import useUsers from "./useUsers";

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

describe("Given a useUsers hook", () => {
  describe("When its function getAllUsers is called", () => {
    test("It should add all robots from the DB to the store state", async () => {
      const users: IUserVisible[] = mockUsers;
      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue(users),
      });

      const {
        result: {
          current: { getAllUsers },
        },
      } = renderHook(useUsers, { wrapper: Wrapper });

      await waitFor(() => {
        getAllUsers();
      });

      const expectedAction = { payload: undefined, type: "users@all" };
      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
