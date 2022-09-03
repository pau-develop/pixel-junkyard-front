import { IUserVisible } from "../../interfaces/interfaces";

interface UserCardProps {
  user: IUserVisible;
}

const UserCard = ({ user }: UserCardProps): JSX.Element => {
  return (
    <article>
      <h2>{user.userName}</h2>
      <span>{user.email}</span>
    </article>
  );
};

export default UserCard;
