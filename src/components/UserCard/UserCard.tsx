import { useNavigate } from "react-router-dom";
import { IUserVisible } from "../../interfaces/interfaces";
import UserCardStyled from "./UserCardStyled";

interface UserCardProps {
  user: IUserVisible;
}

const UserCard = ({ user }: UserCardProps): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(id);
  };

  return (
    <UserCardStyled onClick={() => handleClick(user._id)}>
      <img src="/img/demo-avatar.png" alt={user.userName} />
      <div>
        <h2>{user.userName}</h2>
        <span>{user.email}</span>
      </div>
    </UserCardStyled>
  );
};

export default UserCard;
