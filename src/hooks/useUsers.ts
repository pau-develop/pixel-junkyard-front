import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getAllUsersActionNew } from "../store/actionCreators/actionCreators";

const useUsers = () => {
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_API_URL;

  const getAllUsers = useCallback(async () => {
    const usersData = await fetch(`${url}users/all`);
    const response = await usersData.json();
    const { users } = response;

    dispatch(getAllUsersActionNew(users));
  }, [dispatch, url]);

  return { getAllUsers };
};

export default useUsers;
