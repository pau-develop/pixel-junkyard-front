import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../app/store";
import useDrawings from "../../hooks/useDrawings";
import { IDrawingUser } from "../../interfaces/interfaces";
import UserCard from "../UserCard/UserCard";
import DrawingDetailStyled from "./DrawingDetailStyled";

const DrawingDetail = (): JSX.Element => {
  const { id } = useParams();
  const { getDrawingById } = useDrawings();
  const drawing = useSelector<RootState>(
    (state) => state.drawings[0]
  ) as IDrawingUser;

  useEffect(() => {
    getDrawingById(id as string);
  }, [getDrawingById, id]);

  return (
    <DrawingDetailStyled className="drawing-details">
      {drawing !== undefined && (
        <>
          <section className="drawing-details__display-mobile">
            <img src={drawing.image} alt={drawing.name} />
            <div className="drawing-details__likes-mobile">
              <span></span>
            </div>
          </section>
          <section className="drawing-details__display-desktop">
            <div className="drawing-details__display-desktop-container">
              <img src={drawing.image} alt={drawing.name} />
            </div>
            <div className="drawing-details__likes-desktop">
              <span></span>
            </div>
          </section>
          <section className="drawing-details__info">
            <h2>{drawing.name}</h2>
            <p>{drawing.description}</p>
            <span>Resolution: {drawing.resolution}</span>
            <section className="drawing-details__user-desktop">
              <span>Made by</span>
              {drawing.artist !== undefined && (
                <UserCard user={drawing.artist} />
              )}
            </section>
          </section>

          <section className="drawing-details__user-mobile">
            <span>Made by</span>
            {drawing.artist !== undefined && <UserCard user={drawing.artist} />}
          </section>
        </>
      )}
    </DrawingDetailStyled>
  );
};

export default DrawingDetail;
