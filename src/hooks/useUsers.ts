import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  closeModalActionNew,
  getAllUsersActionNew,
  getUserByIdActionNew,
  openModalActionNew,
} from "../store/actionCreators/actionCreators";

const useUsers = () => {
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_API_URL;

  const getAllUsers = useCallback(async () => {
    let ui = {
      isOpen: true,
      message: "Please wait...",
      type: "delay",
      redirect: "",
      id: "",
    };
    dispatch(openModalActionNew(ui));
    const usersData = await fetch(`${url}users/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    const response = await usersData.json();
    ui = {
      isOpen: false,
      message: "Please wait...",
      type: "",
      redirect: "",
      id: "",
    };
    dispatch(closeModalActionNew(ui));
    const { users } = response;
    dispatch(getAllUsersActionNew(users));
  }, [dispatch, url]);

  const getUserById = useCallback(
    async (id: string) => {
      if (id !== undefined) {
        let ui = {
          isOpen: true,
          message: "Please wait...",
          type: "delay",
          redirect: "",
          id: "",
        };
        dispatch(openModalActionNew(ui));
        const usersData = await fetch(`${url}users/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`,
          },
        });
        const response = await usersData.json();
        const { user } = response;
        ui = {
          isOpen: false,
          message: "Please wait...",
          type: "",
          redirect: "",
          id: "",
        };
        dispatch(closeModalActionNew(ui));
        dispatch(getUserByIdActionNew([user]));
        return user;
      }
    },
    [dispatch, url]
  );

  return { getAllUsers, getUserById };
};

export default useUsers;
