import { useDispatch } from "react-redux";
import { IUser } from "../interfaces/interfaces";
import {
  loginUserActionNew,
  logoutUserActionNew,
  openModalActionNew,
} from "../store/actionCreators/actionCreators";
import { IUserLoginData, IUserRegisterData } from "../store/types/interfaces";
import { fetchToken } from "../utils/auth";

const useUser = () => {
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_API_URL;

  const registerUser = async (userData: IUserRegisterData) => {
    const data = await fetch(`${url}user/register`, {
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
    const data = await fetch(`${url}user/login`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.status !== 200) {
      const ui = {
        isOpen: true,
        message: "Incorrect user name or password",
        type: "confirm",
        redirect: "/login",
      };
      dispatch(openModalActionNew(ui));
      return;
    }
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
    localStorage.setItem("token", token);
    dispatch(openModalActionNew(ui));
  };

  const logoutUser = () => {
    const user: IUser = {
      userName: "",
      token: "",
    };
    dispatch(logoutUserActionNew(user));
    const ui = {
      isOpen: true,
      message: "You logged out",
      type: "",
      redirect: "/home",
    };
    localStorage.removeItem("token");
    dispatch(openModalActionNew(ui));
  };

  return { registerUser, loginUser, logoutUser };
};

export default useUser;
