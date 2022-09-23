import { useState } from "react";
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
  const [visible, setVisible] = useState(type);
  const navigate = useNavigate();
  const { deleteAccount } = useUser();
  if (type === "delay") {
    let timer = 0.75;
    const counter = () => {
      setInterval(() => {
        timer -= 0.25;
        if (timer <= 0) {
          setVisible("");
        }
      }, 250);
    };

    counter();
  }

  if (type === "autofade") {
    let timer = 2;
    const counter = () => {
      const interval = setInterval(() => {
        timer -= 1;
        if (timer <= 0) {
          clearInterval(interval);
          if (redirect !== "") {
            navigate(redirect);
          }
          dispatch(closeModalActionNew(ui));
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
    <>
      {visible !== "delay" && (
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
      )}
    </>
  );
};

export default Modal;
