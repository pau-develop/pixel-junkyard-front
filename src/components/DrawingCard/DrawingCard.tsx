import { IDrawing } from "../../interfaces/interfaces";
import DrawingCardStyled from "./DrawingCardStyled";

interface DrawingCardProps {
  draw: IDrawing;
}

const DrawingCard = ({ draw }: DrawingCardProps): JSX.Element => {
  return (
    <DrawingCardStyled className="draw-card">
      <span className="draw-card__title">{draw.name}</span>
      <img className="draw-card__image" src={draw.image} alt={draw.name} />
      <span className="draw-card__footer">{draw.artist}</span>
    </DrawingCardStyled>
  );
};

export default DrawingCard;
