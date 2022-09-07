import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../app/store";
import useDrawings from "../../hooks/useDrawings";
import { IDrawing, IUserVisible } from "../../interfaces/interfaces";
import UserCard from "../UserCard/UserCard";
import DrawingDetailStyled from "./DrawingDetailStyled";

const DrawingDetail = (): JSX.Element => {
  const { id } = useParams();
  const { getDrawingById } = useDrawings();
  const drawing = useSelector<RootState>(
    (state) => state.drawings[0]
  ) as IDrawing;
  const user = useSelector<RootState>(
    (state) => state.users[0]
  ) as IUserVisible;

  useEffect(() => {
    getDrawingById(id as string);
  }, [getDrawingById, id]);

  console.log(drawing);

  return (
    <DrawingDetailStyled className="drawing-details">
      {drawing !== undefined && (
        <>
          <section className="drawing-details__display-mobile">
            <img src={drawing.image} alt={drawing.name} />
            <div className="drawing-details__likes-mobile">
              <span>hola</span>
            </div>
          </section>
          <section className="drawing-details__display-desktop">
            <div className="drawing-details__display-desktop-container">
              <img src={drawing.image} alt={drawing.name} />
            </div>
            <div className="drawing-details__likes-desktop">
              <span>hola</span>
            </div>
          </section>
          <section className="drawing-details__info">
            <h2>{drawing.name}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem
              hic quod ad, inventore nostrum nobis porro quia sunt consectetur
              praesentium eligendi nisi modi eveniet, obcaecati corrupti
              repudiandae ullam? Placeat, ut.
            </p>
            <span>Resolution: {drawing.resolution}</span>
            <section className="drawing-details__user-desktop">
              <span>Made by</span>
              {user !== undefined && <UserCard user={user} />}
            </section>
          </section>

          <section className="drawing-details__user-mobile">
            <span>Made by</span>
            {user !== undefined && <UserCard user={user} />}
          </section>
        </>
      )}
    </DrawingDetailStyled>
  );
};

export default DrawingDetail;
