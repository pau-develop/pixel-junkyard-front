import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  getAllUsersActionNew,
  getUserByIdActionNew,
} from "../store/actionCreators/actionCreators";

const useUsers = () => {
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_API_URL;

  const getAllUsers = useCallback(async () => {
    const usersData = await fetch(`${url}users/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    const response = await usersData.json();
    const { users } = response;

    dispatch(getAllUsersActionNew(users));
  }, [dispatch, url]);

  const getUserById = useCallback(
    async (id: string) => {
      const usersData = await fetch(`${url}users/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      const response = await usersData.json();
      const { users } = response;

      dispatch(getUserByIdActionNew(users));
    },
    [dispatch, url]
  );

  return { getAllUsers, getUserById };
};

export default useUsers;
