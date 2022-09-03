import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersActionNew } from "../store/actionCreators/actionCreators";
import { IUser } from "../interfaces/interfaces";
import { RootState } from "../app/store";

const useUsers = () => {
  const user = useSelector<RootState>((state) => state.user) as IUser;
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_API_URL;

  const getAllUsers = useCallback(async () => {
    const usersData = await fetch(`${url}users/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const response = await usersData.json();
    const { users } = response;

    dispatch(getAllUsersActionNew(users));
  }, [dispatch, url, user.token]);

  return { getAllUsers };
};

export default useUsers;
