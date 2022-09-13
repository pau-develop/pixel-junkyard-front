import { useNavigate } from "react-router-dom";
import { IUserVisible } from "../../interfaces/interfaces";
import UserCardStyled from "./UserCardStyled";

interface UserCardProps {
  user: IUserVisible;
}

const UserCard = ({ user }: UserCardProps): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`/community/${id}`);
  };

  return (
    <UserCardStyled onClick={() => handleClick(user.id)}>
      <div className="image-container">
        <img
          src={user.avatar === "???" ? "/img/demo-avatar.png" : user.avatar}
          alt={user.userName}
        />
      </div>
      <div>
        <h2>{user.userName}</h2>
        <span>{user.email}</span>
      </div>
    </UserCardStyled>
  );
};

export default UserCard;
