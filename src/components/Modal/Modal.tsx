import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeModalActionNew } from "../../store/actionCreators/actionCreators";
import Button from "../Button/Button";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  message: string;
  type?: string;
  redirect: string;
}

const Modal = ({ message, type, redirect }: ModalProps): JSX.Element => {
  const navigate = useNavigate();

  if (redirect !== "") {
    let timer = 3;
    const counter = () => {
      const interval = setInterval(() => {
        timer -= 1;
        if (timer <= 0) {
          clearInterval(interval);
          dispatch(closeModalActionNew(ui));
          navigate(redirect);
        }
      }, 1000);
    };

    counter();
  }

  const dispatch = useDispatch();

  const ui = {
    isOpen: false,
    message: "",
    type: "confirm",
    redirect: "",
  };

  const handleClick = () => {
    dispatch(closeModalActionNew(ui));
  };

  return (
    <ModalStyled className="modal" data-testid="modal-element">
      <div className="modal__box">
        <p>{message}</p>
        {type === "confirm" ? <Button text="OK" action={handleClick} /> : null}
      </div>
    </ModalStyled>
  );
};

export default Modal;
