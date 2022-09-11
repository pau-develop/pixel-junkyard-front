import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { IDrawing, IUserVisible } from "../../interfaces/interfaces";
import DrawingCardStyled from "./DrawingCardStyled";

import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useDrawings from "../../hooks/useDrawings";

interface DrawingCardProps {
  draw: IDrawing;
}

const DrawingCard = ({ draw }: DrawingCardProps): JSX.Element => {
  const { deleteDrawing } = useDrawings();
  const user = useSelector<RootState>((state) => state.user) as IUserVisible;
  const trashIcon = <FontAwesomeIcon icon={faTrashCan} />;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/gallery/${draw.id}`);
  };

  const handleDeleteDrawing = () => {
    deleteDrawing(draw);
  };

  return (
    <DrawingCardStyled className="draw-card">
      {draw.artistName === user.userName && (
        <div
          className="draw-card__icon"
          onClick={handleDeleteDrawing}
          data-testid="delete-icon"
        >
          <i className="fa-2xl">{trashIcon}</i>
        </div>
      )}
      <span className="draw-card__title">{draw.name}</span>
      <img
        className="draw-card__image"
        src={draw.image}
        alt={draw.name}
        onClick={handleClick}
      />
      <div className="draw-card__footer">
        <span>date</span>
        <span>{`Made by: ${draw.artistName}`}</span>
      </div>
    </DrawingCardStyled>
  );
};

export default DrawingCard;
