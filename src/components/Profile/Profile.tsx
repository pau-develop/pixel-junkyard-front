import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../app/store";
import useUsers from "../../hooks/useUsers";
import { IUserVisible } from "../../interfaces/interfaces";
import ProfileStyled from "./ProfileStyled";

const Profile = (): JSX.Element => {
  const { getUserById } = useUsers();
  const { id } = useParams();

  useEffect(() => {
    getUserById(id as string);
    console.log("running...");
  }, [getUserById, id]);

  const user = useSelector<RootState>(
    (state) => state.users[0]
  ) as IUserVisible;

  return (
    <ProfileStyled className="profile">
      {user !== undefined && (
        <>
          <section className="profile__info">
            <div className="profile__info-avatar">
              <img src="/img/demo-avatar.png" alt={user.userName} />
            </div>
            <div className="profile__info-props">
              <h2>{user.userName}</h2>
              <ul>
                <li>{user.email}</li>
                <li>XP points</li>
                <li>3 likes</li>
                <li>2 comments</li>
              </ul>
            </div>
          </section>
          <section className="profile__gallery">
            <h3>{`${user.userName}'s Gallery`}</h3>
            <div className="profile__gallery-display"></div>
          </section>
        </>
      )}
    </ProfileStyled>
  );
};

export default Profile;
