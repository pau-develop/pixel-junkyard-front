import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { closeModalActionNew } from "../../store/actionCreators/actionCreators";
import Button from "../Button/Button";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  message: string;
  type?: string;
  redirect: string;
  id?: string;
}

const Modal = ({ message, type, redirect, id }: ModalProps): JSX.Element => {
  const navigate = useNavigate();
  const { deleteAccount } = useUser();

  if (type === "autofade") {
    let timer = 2;
    const counter = () => {
      const interval = setInterval(() => {
        timer -= 1;
        if (timer <= 0) {
          clearInterval(interval);
          dispatch(closeModalActionNew(ui));
          if (redirect !== "") {
            navigate(redirect);
          }
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
    id: "",
  };

  const handleClick = () => {
    dispatch(closeModalActionNew(ui));
  };
  const handleDeleteAccount = () => {
    deleteAccount(id as string);
  };

  return (
    <ModalStyled className="modal" data-testid="modal-element">
      <div className="modal__box">
        <p>{message}</p>
        {type === "confirm" && <Button text="OK" action={handleClick} />}
        {type === "delete" && (
          <>
            <Button text="Cancel" action={handleClick} />
            <Button text="Accept" action={handleDeleteAccount} />
          </>
        )}
      </div>
    </ModalStyled>
  );
};

export default Modal;
