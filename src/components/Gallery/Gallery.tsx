import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useDrawings from "../../hooks/useDrawings";
import { IDrawing } from "../../interfaces/interfaces";
import Button from "../Button/Button";
import DrawingCard from "../DrawingCard/DrawingCard";
import GalleryStyled from "./GalleryStyled";

const Gallery = (): JSX.Element => {
  const [offset, setOffset] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const drawings = useSelector<RootState>(
    (state) => state.drawings
  ) as IDrawing[];
  const { getAllDrawings } = useDrawings();

  useEffect(() => {
    (async () => {
      const totalDocs = await getAllDrawings(offset, 4);
      setTotal(totalDocs);
    })();
  }, [getAllDrawings, offset]);

  const handleIncrement = () => {
    const tempOffset = offset + 4;
    setOffset(tempOffset);
  };
  const handleDecrement = () => {
    if (offset !== 0) {
      const tempOffset = offset - 4;
      setOffset(tempOffset);
    }
  };

  const getItemNumber = () => {
    return offset + 4 > total ? total : offset + 4;
  };

  return (
    <GalleryStyled className="gallery">
      {drawings[0] !== undefined && typeof drawings[0].artist === "string" && (
        <>
          <div className="gallery__list">
            <ul>
              {drawings.map((drawing) => (
                <li key={drawing.id}>
                  <DrawingCard draw={drawing} />
                </li>
              ))}
            </ul>
            <div className="gallery__footer">
              <Button text="<<" action={handleDecrement} />
              <span>{`${getItemNumber()}/${total}`}</span>
              <Button text=">>" action={handleIncrement} />
            </div>
          </div>
        </>
      )}
    </GalleryStyled>
  );
};

export default Gallery;
