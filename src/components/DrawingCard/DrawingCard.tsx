import { IDrawing } from "../../interfaces/interfaces";
import DrawingCardStyled from "./DrawingCardStyled";

interface DrawingCardProps {
  draw: IDrawing;
}

const DrawingCard = ({ draw }: DrawingCardProps): JSX.Element => {
  return (
    <DrawingCardStyled>
      <img src={draw.image} alt={draw.name} />
    </DrawingCardStyled>
  );
};

export default DrawingCard;
