import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useUsers from "../../hooks/useUsers";
import { IUser, IUserVisible } from "../../interfaces/interfaces";
import UserCard from "../UserCard/UserCard";
import CommunityStyled from "./CommunityStyled";

const Community = (): JSX.Element => {
  const { getAllUsers } = useUsers();

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  let users = useSelector<RootState>((state) => state.users) as IUserVisible[];

  const currentUser = useSelector<RootState>((state) => state.user) as IUser;

  users = users.filter((user) => user.id !== currentUser.id);

  return (
    <CommunityStyled>
      <ul>
        {users.map((user, index) => (
          <li key={user.userName}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </CommunityStyled>
  );
};

export default Community;
