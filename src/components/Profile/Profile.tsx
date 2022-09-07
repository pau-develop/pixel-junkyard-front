import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { RootState } from "../../app/store";
import useDrawings from "../../hooks/useDrawings";
import useUsers from "../../hooks/useUsers";
import { IDrawing, IUserVisible } from "../../interfaces/interfaces";
import { openModalActionNew } from "../../store/actionCreators/actionCreators";
import { IUIModal } from "../../store/types/interfaces";
import Button from "../Button/Button";
import DrawingCard from "../DrawingCard/DrawingCard";
import ProfileStyled from "./ProfileStyled";

const Profile = (): JSX.Element => {
  const isProfile = useLocation().pathname.includes("profile");
  const dispatch = useDispatch();
  const { getUserById } = useUsers();
  const { getAllDrawings } = useDrawings();

  const { id } = useParams();

  useEffect(() => {
    getUserById(id as string);
    getAllDrawings();
  }, [getUserById, getAllDrawings, id]);

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

  let drawings = useSelector<RootState>(
    (state) => state.drawings
  ) as IDrawing[];

  const filterDrawingById = (drawings: IDrawing[]) => {
    return drawings.filter((drawing) => {
      return drawing.userId === id;
    });
  };

  drawings = filterDrawingById(drawings);

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
                <Button text="Delete account" action={handleDeleteAccount} />
              </div>
            )}
          </section>
          {isProfile && (
            <section className="profile__settings-mobile">
              <Button text="Edit avatar" />
              <Button text="Delete account" action={handleDeleteAccount} />
            </section>
          )}

          <section className="profile__gallery">
            <h3>{`${user.userName}'s Gallery`}</h3>
            <div className="profile__gallery-display">
              <ul>
                {drawings.map((drawing) => (
                  <li key={drawing._id}>
                    <DrawingCard draw={drawing} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </>
      )}
    </ProfileStyled>
  );
};

export default Profile;
