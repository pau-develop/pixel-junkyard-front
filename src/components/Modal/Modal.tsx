import { useDispatch } from "react-redux";
import { closeModalActionNew } from "../../store/actionCreators/actionCreators";
import Button from "../Button/Button";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  message: string;
}

const Modal = ({ message }: ModalProps): JSX.Element => {
  const dispatch = useDispatch();

  const ui = {
    isOpen: false,
    message: "",
  };

  const handleClick = () => {
    dispatch(closeModalActionNew(ui));
  };

  return (
    <ModalStyled className="modal">
      <div className="modal__box">
        <h2>ERROR</h2>
        <p>{message}</p>
        <Button text="OK" action={handleClick} />
      </div>
    </ModalStyled>
  );
};

export default Modal;
