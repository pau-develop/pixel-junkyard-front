import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../app/store";
import useUsers from "../../hooks/useUsers";
import { IUserVisible } from "../../interfaces/interfaces";
import { openModalActionNew } from "../../store/actionCreators/actionCreators";
import { IUIModal } from "../../store/types/interfaces";
import Button from "../Button/Button";
import DrawingCard from "../DrawingCard/DrawingCard";
import ProfileStyled from "./ProfileStyled";

const indexInitial = 0;

const Profile = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number>(indexInitial);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const navigate = useNavigate();
  const isProfile = useLocation().pathname.includes("profile");
  const dispatch = useDispatch();
  const { getUserById } = useUsers();
  const { id } = useParams();

  const getTotalLikes = (isLikes: boolean) => {
    let total = 0;
    if (isLikes) {
      for (let i = 0; i < user.drawings.length; i++) {
        total += user.drawings[i].likes.length;
      }
      return total;
    }
    for (let i = 0; i < user.drawings.length; i++) {
      total += user.drawings[i].dislikes.length;
    }
    return total;
  };

  useEffect(() => {
    getUserById(id as string);
  }, [getUserById, id]);

  const changeWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", changeWidth);
  }, []);

  const handleEditAvatar = () => {
    navigate("/avatar");
  };

  const handleIncrement = () => {
    if (windowWidth >= 1400) {
      if (currentIndex + 2 < user.drawings.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    } else {
      if (currentIndex < user.drawings.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const handleDecrement = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleDeleteAccount = () => {
    const ui = {
      isOpen: true,
      message: "Permanently delete account?",
      type: "delete",
      redirect: "",
      id: id as string,
    } as IUIModal;
    dispatch(openModalActionNew(ui));
  };

  const user = useSelector<RootState>(
    (state) => state.users[0]
  ) as IUserVisible;

  return (
    <ProfileStyled className="profile">
      {user !== undefined && (
        <>
          <div className="profile__gallery-wrap">
            <section className="profile__info-wrap">
              {windowWidth >= 1400 && (
                <h3 className="profile__info-title">Info</h3>
              )}
              <div className="profile__info">
                <div className="profile__info-avatar">
                  <img
                    src={
                      user.avatar === "???"
                        ? "/img/demo-avatar.png"
                        : user.avatar
                    }
                    alt={user.userName}
                  />
                </div>
                <div className="profile__info-props">
                  <h2>{user.userName}</h2>
                  <div className="profile__list-container">
                    <ul>
                      <li>Drawings:</li>
                      <li>Likes:</li>
                      <li>Dislikes:</li>
                    </ul>

                    <ul>
                      <li>{user.drawings.length}</li>
                      <li>{getTotalLikes(true)}</li>
                      <li>{getTotalLikes(false)}</li>
                    </ul>
                  </div>
                </div>
                {isProfile && (
                  <div className="profile__settings-desktop">
                    <Button text="Edit avatar" action={handleEditAvatar} />
                    <Button
                      text="Delete account"
                      action={handleDeleteAccount}
                    />
                  </div>
                )}
              </div>
            </section>

            <section className="profile__gallery">
              {isProfile && (
                <section className="profile__settings-mobile">
                  <Button text="Edit avatar" action={handleEditAvatar} />
                  <Button text="Delete account" action={handleDeleteAccount} />
                </section>
              )}
              <div className="profile__gallery-title">
                <h3>{`${user.userName}'s Gallery`}</h3>
              </div>
              <div className="profile__gallery-display">
                {user.drawings.length > 0 ? (
                  <>
                    <div
                      className={
                        currentIndex !== 0
                          ? "profile__nav-button"
                          : "profile__nav-button--hidden"
                      }
                    >
                      <Button text="<<" action={handleDecrement} />
                    </div>
                    <ul>
                      {windowWidth < 1400 &&
                        user.drawings.map(
                          (drawing, index) =>
                            index === currentIndex && (
                              <li key={index}>
                                <DrawingCard draw={drawing} />
                              </li>
                            )
                        )}
                      {windowWidth >= 1400 &&
                        user.drawings.map(
                          (drawing, index) =>
                            index >= currentIndex &&
                            index <= currentIndex + 2 && (
                              <li key={index}>
                                <DrawingCard draw={drawing} />
                              </li>
                            )
                        )}
                    </ul>
                    <div
                      className={
                        currentIndex < user.drawings.length - 1
                          ? "profile__nav-button"
                          : "profile__nav-button--hidden"
                      }
                    >
                      {(windowWidth >= 1400 &&
                        currentIndex < user.drawings.length - 3) ||
                      windowWidth < 1400 ? (
                        <Button text=">>" action={handleIncrement} />
                      ) : null}
                    </div>
                  </>
                ) : (
                  <span>{user.userName} hasn't uploaded any drawings yet</span>
                )}
              </div>
            </section>
          </div>
          <div className="profile__footer"></div>
        </>
      )}
    </ProfileStyled>
  );
};

export default Profile;
