import UserData from "../interfaces/interface";

const useUsers = () => {
  const registerUser = async (userData: UserData) => {
    const url = process.env.REACT_APP_API_URL;
    await fetch(`${url}users/register`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return { registerUser };
};

export default useUsers;
