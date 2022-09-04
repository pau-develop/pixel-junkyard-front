import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { RootState } from "../../app/store";
import useUsers from "../../hooks/useUsers";
import { IUserVisible } from "../../interfaces/interfaces";
import Button from "../Button/Button";
import ProfileStyled from "./ProfileStyled";

const Profile = (): JSX.Element => {
  const isProfile = useLocation().pathname.includes("profile");

  const { getUserById } = useUsers();
  const { id } = useParams();

  useEffect(() => {
    getUserById(id as string);
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
            {isProfile && (
              <div className="profile__settings-desktop">
                <Button text="Edit avatar" />
                <Button text="Delete account" />
              </div>
            )}
          </section>
          {isProfile && (
            <section className="profile__settings-mobile">
              <Button text="Edit avatar" />
              <Button text="Delete account" />
            </section>
          )}

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
