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
      {drawings[0] !== undefined && typeof drawings[0].artist === "string" && (
        <ul>
          {drawings.map((drawing) => (
            <li key={drawing._id}>
              <DrawingCard draw={drawing} />
            </li>
          ))}
        </ul>
      )}
    </GalleryStyled>
  );
};

export default Gallery;
