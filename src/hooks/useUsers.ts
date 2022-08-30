import { UserData } from "../store/types/interfaces";

const useUsers = () => {
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
    }
  };

  return { registerUser };
};

export default useUsers;
