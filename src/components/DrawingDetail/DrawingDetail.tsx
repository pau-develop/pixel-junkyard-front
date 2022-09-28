import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../app/store";
import useDrawings from "../../hooks/useDrawings";
import { IDrawingUser } from "../../interfaces/interfaces";
import UserCard from "../UserCard/UserCard";
import DrawingDetailStyled from "./DrawingDetailStyled";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DrawingDetail = (): JSX.Element => {
  const likeIcon = <FontAwesomeIcon icon={faThumbsUp} />;
  const dislikeIcon = <FontAwesomeIcon icon={faThumbsDown} />;
  const { id } = useParams();
  const { getDrawingById, updateDrawing } = useDrawings();

  const drawing = useSelector<RootState>(
    (state) => state.drawings[0]
  ) as IDrawingUser;

  useEffect(() => {
    getDrawingById(id as string);
  }, [getDrawingById, id]);

  const handleLike = async (like: string) => {
    await updateDrawing(id as string, like);
    getDrawingById(id as string);
  };

  return (
    <DrawingDetailStyled className="drawing-details">
      {drawing !== undefined && (
        <>
          <section className="drawing-details__wrap">
            <section className="drawing-details__display-mobile">
              <img src={drawing.image} alt={drawing.name} />
              <div className="drawing-details__likes-mobile">
                <div
                  data-testid="like-mobile"
                  onClick={() => handleLike("true")}
                >
                  <i>{likeIcon}</i>
                  <span>{drawing.likes.length}</span>
                </div>
                <div
                  data-testid="dislike-mobile"
                  onClick={() => handleLike("false")}
                >
                  <i>{dislikeIcon}</i>
                  <span>{drawing.dislikes.length}</span>
                </div>
              </div>
            </section>
            <section className="drawing-details__display-desktop">
              <div className="drawing-details__display-desktop-container">
                <img src={drawing.image} alt={drawing.name} />
              </div>
              <div className="drawing-details__likes-desktop">
                <div
                  data-testid="like-desktop"
                  onClick={() => handleLike("true")}
                >
                  <i>{likeIcon}</i>
                  <span>{drawing.likes.length}</span>
                </div>
                <div
                  data-testid="dislike-desktop"
                  onClick={() => handleLike("false")}
                >
                  <i>{dislikeIcon}</i>
                  <span>{drawing.dislikes.length}</span>
                </div>
              </div>
            </section>
            <section className="drawing-details__info">
              <div className="drawing-details__info-section">
                <h2>Name</h2>
                <span>{drawing.name}</span>
              </div>
              <div className="drawing-details__info-section">
                <h2>Description</h2>
                <p>{drawing.description}</p>
              </div>
              <div className="drawing-details__info-section">
                <h2>Resolution</h2>
                <span>{drawing.resolution}</span>
              </div>
              <section className="drawing-details__user-desktop">
                <span>Made by</span>
                {drawing.artist !== undefined && (
                  <UserCard user={drawing.artist} />
                )}
              </section>
            </section>

            <section className="drawing-details__user-mobile">
              <span>Made by</span>
              {drawing.artist !== undefined && (
                <UserCard user={drawing.artist} />
              )}
            </section>
          </section>
        </>
      )}
      <section className="drawing-details__footer"></section>
    </DrawingDetailStyled>
  );
};

export default DrawingDetail;
