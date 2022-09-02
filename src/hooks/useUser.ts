import { useDispatch } from "react-redux";
import {
  loginUserActionNew,
  openModalActionNew,
} from "../store/actionCreators/actionCreators";
import { IUserLoginData, IUserRegisterData } from "../store/types/interfaces";
import { fetchToken } from "../utils/auth";

const useUser = () => {
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_API_URL;

  const registerUser = async (userData: IUserRegisterData) => {
    const data = await fetch(`${url}users/register`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await data.json();
    if (response.error) {
      const ui = {
        isOpen: true,
        message: response.error,
        type: "",
        redirect: "",
      };
      dispatch(openModalActionNew(ui));
      return;
    }
    const ui = {
      isOpen: true,
      message: "User registered!",
      type: "",
      redirect: "/login",
    };
    dispatch(openModalActionNew(ui));
  };

  const loginUser = async (userData: IUserLoginData) => {
    const data = await fetch(`${url}users/login`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const {
      user: { token },
    } = await data.json();
    const user = fetchToken(token);
    dispatch(loginUserActionNew(user));
    const ui = {
      isOpen: true,
      message: "You are logged in!",
      type: "",
      redirect: "/home",
    };
    dispatch(openModalActionNew(ui));
  };

  return { registerUser, loginUser };
};

export default useUser;
