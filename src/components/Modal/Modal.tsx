import Button from "../Button/Button";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  message: string;
}

const Modal = ({ message }: ModalProps): JSX.Element => {
  return (
    <ModalStyled className="modal">
      <div className="modal__box">
        <p>{message}</p>
        <Button text="OK" />
      </div>
    </ModalStyled>
  );
};

export default Modal;
