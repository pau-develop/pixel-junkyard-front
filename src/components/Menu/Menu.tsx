import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import MenuStyled from "./MenuStyled";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { IUser } from "../../interfaces/interfaces";

interface MenuProps {
  action: () => void;
  menuClass?: string;
  logAction?: () => void;
}

const Menu = ({ action, menuClass, logAction }: MenuProps): JSX.Element => {
  const currentUser = useSelector<RootState>((state) => state.user) as IUser;
  const logoutIcon = <FontAwesomeIcon icon={faPowerOff} />;
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
    action();
  };

  return (
    <MenuStyled
      className={menuClass}
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ bounce: 0 }}
      exit={{ x: "+100%" }}
    >
      <Button
        text="PROFILE"
        action={() => handleClick(`/profile/${currentUser.id}`)}
        buttonClass={"button-navigation"}
      />
      <Button
        text="COMMUNITY"
        action={() => handleClick("/community")}
        buttonClass={"button-navigation"}
      />
      <Button
        text="GALLERY"
        action={() => handleClick("/gallery")}
        buttonClass={"button-navigation"}
      />
      <Button
        text="CANVAS"
        action={() => handleClick("/canvas")}
        buttonClass={"button-navigation"}
      />
      <i onClick={logAction}>{logoutIcon}</i>
    </MenuStyled>
  );
};

export default Menu;
