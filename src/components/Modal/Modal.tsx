import { useDispatch } from "react-redux";
import { closeModalActionNew } from "../../store/actionCreators/actionCreators";
import Button from "../Button/Button";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  message: string;
  type?: string;
}

const Modal = ({ message, type }: ModalProps): JSX.Element => {
  const dispatch = useDispatch();

  const ui = {
    isOpen: false,
    message: "",
    type: "confirm",
  };

  const handleClick = () => {
    dispatch(closeModalActionNew(ui));
  };

  return (
    <ModalStyled className="modal">
      <div className="modal__box">
        <h2>ERROR</h2>
        <p>{message}</p>
        {type === "confirm" ? <Button text="OK" action={handleClick} /> : null}
      </div>
    </ModalStyled>
  );
};

export default Modal;
