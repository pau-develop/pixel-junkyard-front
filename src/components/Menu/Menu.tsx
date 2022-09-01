import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import MenuStyled from "./MenuStyled";

interface MenuProps {
  action: () => void;
}

const Menu = ({ action }: MenuProps): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
    action();
  };

  return (
    <MenuStyled className="phone-menu">
      <Button text="PROFILE" action={() => handleClick("/profile")} />
      <Button text="COMMUNITY" action={() => handleClick("/community")} />
      <Button text="GALLERY" action={() => handleClick("/gallery")} />
      <Button text="DRAW" action={() => handleClick("/gallery")} />
    </MenuStyled>
  );
};

export default Menu;
