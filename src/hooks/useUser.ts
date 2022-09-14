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
        type: "confirm",
        redirect: "",
        id: "",
      };
      dispatch(openModalActionNew(ui));
      return;
    }
    const ui = {
      isOpen: true,
      message: "User registered!",
      type: "",
      redirect: "/login",
      id: "",
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
        id: "",
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
      id: "",
    };
    localStorage.setItem("token", token);
    dispatch(openModalActionNew(ui));
  };

  const logoutUser = () => {
    const user: IUser = {
      userName: "",
      token: "",
      id: "",
    };
    dispatch(logoutUserActionNew(user));
    const ui = {
      isOpen: true,
      message: "You logged out",
      type: "",
      redirect: "/home",
      id: "",
    };
    localStorage.removeItem("token");
    dispatch(openModalActionNew(ui));
  };

  const deleteAccount = async (id: string) => {
    const data = await fetch(`${url}users/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    });

    if (data.status !== 200) {
      const ui = {
        isOpen: true,
        message: "Something went wrong, please try again",
        type: "confirm",
        redirect: "",
        id: "",
      };
      dispatch(openModalActionNew(ui));
      return;
    }
    const ui = {
      isOpen: true,
      message: "Your account has been deleted",
      type: "",
      redirect: "/home",
      id: "",
    };
    localStorage.removeItem("token");
    const user: IUser = {
      userName: "",
      token: "",
      id: "",
    };
    dispatch(logoutUserActionNew(user));
    dispatch(openModalActionNew(ui));
  };

  const updateUser = async (newAvatar: string) => {
    const objectToSend = {
      newAvatar: newAvatar,
    };

    const userData = await fetch(`${url}user/modify`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(objectToSend),
    });
    if (userData.status !== 200) {
      const ui = {
        isOpen: true,
        message: "Something went wrong!",
        type: "confirm",
        redirect: "",
        id: "",
      };
      dispatch(openModalActionNew(ui));
      return;
    }
    const token = localStorage.getItem("token") as string;
    const userInfo = fetchToken(token);
    const ui = {
      isOpen: true,
      message: "Avatar updated!",
      type: "confirm",
      redirect: `/profile/${userInfo.id}`,
      id: "",
    };
    dispatch(openModalActionNew(ui));
  };

  return { registerUser, loginUser, logoutUser, deleteAccount, updateUser };
};

export default useUser;
