import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useUsers from "../../hooks/useUsers";
import { IUserVisible } from "../../interfaces/interfaces";
import UserCard from "../UserCard/UserCard";
import CommunityStyled from "./CommunityStyled";

const Community = (): JSX.Element => {
  const users = useSelector<RootState>(
    (state) => state.users
  ) as IUserVisible[];
  const { getAllUsers } = useUsers();

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

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
