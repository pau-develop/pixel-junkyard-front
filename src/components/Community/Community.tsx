import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useUsers from "../../hooks/useUsers";
import { IUserVisible } from "../../interfaces/interfaces";
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
      <ul></ul>
    </CommunityStyled>
  );
};

export default Community;
