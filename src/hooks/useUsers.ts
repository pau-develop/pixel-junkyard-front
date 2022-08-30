import { useDispatch } from "react-redux";
import { openModalActionNew } from "../store/actionCreators/actionCreators";
import { UserData } from "../store/types/interfaces";

const useUsers = () => {
  const dispatch = useDispatch();
  const registerUser = async (userData: UserData) => {
    const url = process.env.REACT_APP_API_URL;
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
      };
      dispatch(openModalActionNew(ui));
    }
  };

  return { registerUser };
};

export default useUsers;
