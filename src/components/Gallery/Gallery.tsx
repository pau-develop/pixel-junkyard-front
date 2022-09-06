import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useDrawings from "../../hooks/useDrawings";
import { IDrawing } from "../../interfaces/interfaces";
import DrawingCard from "../DrawingCard/DrawingCard";
import GalleryStyled from "./GalleryStyled";

const Gallery = (): JSX.Element => {
  const drawings = useSelector<RootState>(
    (state) => state.drawings
  ) as IDrawing[];
  const { getAllDrawings } = useDrawings();

  useEffect(() => {
    getAllDrawings();
  }, [getAllDrawings]);

  return (
    <GalleryStyled className="gallery">
      <ul>
        {drawings.map((drawing) => (
          <li>
            <DrawingCard draw={drawing} key={drawing._id} />
          </li>
        ))}
      </ul>
    </GalleryStyled>
  );
};

export default Gallery;
