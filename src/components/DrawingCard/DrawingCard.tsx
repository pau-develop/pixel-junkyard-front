import { useNavigate } from "react-router-dom";
import { IDrawing } from "../../interfaces/interfaces";
import DrawingCardStyled from "./DrawingCardStyled";

interface DrawingCardProps {
  draw: IDrawing;
}

const DrawingCard = ({ draw }: DrawingCardProps): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/gallery/${draw.id}`);
  };

  return (
    <DrawingCardStyled className="draw-card">
      <span className="draw-card__title">{draw.name}</span>
      <img
        className="draw-card__image"
        src={draw.image}
        alt={draw.name}
        onClick={handleClick}
      />
      <div className="draw-card__footer">
        <span>date</span>
        <span>{draw.artist}</span>
      </div>
    </DrawingCardStyled>
  );
};

export default DrawingCard;
