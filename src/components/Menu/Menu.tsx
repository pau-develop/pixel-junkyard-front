import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import MenuStyled from "./MenuStyled";

interface MenuProps {
  action: () => void;
  menuClass?: string;
  logAction?: () => void;
}

const Menu = ({ action, menuClass, logAction }: MenuProps): JSX.Element => {
  const logoutIcon = <FontAwesomeIcon icon={faPowerOff} />;
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
    action();
  };

  return (
    <MenuStyled className={menuClass}>
      <Button
        text="PROFILE"
        action={() => handleClick("/profile")}
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
        text="DRAW"
        action={() => handleClick("/gallery")}
        buttonClass={"button-navigation"}
      />
      <i onClick={logAction}>{logoutIcon}</i>
    </MenuStyled>
  );
};

export default Menu;
