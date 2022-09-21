import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { IDrawing, IUserVisible } from "../../interfaces/interfaces";
import DrawingCardStyled from "./DrawingCardStyled";

import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useDrawings from "../../hooks/useDrawings";
import useUsers from "../../hooks/useUsers";

interface DrawingCardProps {
  draw: IDrawing;
}

const DrawingCard = ({ draw }: DrawingCardProps): JSX.Element => {
  const { deleteDrawing } = useDrawings();
  const { getUserById } = useUsers();
  const user = useSelector<RootState>((state) => state.user) as IUserVisible;
  const trashIcon = <FontAwesomeIcon icon={faTrashCan} />;
  const { id } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/gallery/${draw.id}`);
  };

  const handleDeleteDrawing = async () => {
    await deleteDrawing(draw);

    getUserById(id as string);
  };

  return (
    <DrawingCardStyled className="draw-card">
      {draw.artistName === user.userName && (
        <div
          className="draw-card__icon"
          onClick={handleDeleteDrawing}
          data-testid="delete-icon"
        >
          <i className="fa-lg">{trashIcon}</i>
        </div>
      )}
      <div className="draw-card__title">
        <span>{draw.name}</span>
      </div>
      <img
        className="draw-card__image"
        src={draw.image}
        alt={draw.name}
        onClick={handleClick}
      />
      <div className="draw-card__footer">
        <span>{draw.resolution}</span>
      </div>
    </DrawingCardStyled>
  );
};

export default DrawingCard;
