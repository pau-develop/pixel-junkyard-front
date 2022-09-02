import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import MenuStyled from "./MenuStyled";

interface MenuProps {
  action: () => void;
  menuClass?: string;
}

const Menu = ({ action, menuClass }: MenuProps): JSX.Element => {
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
    </MenuStyled>
  );
};

export default Menu;
