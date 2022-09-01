import { useState } from "react";
import { IUser } from "../../interfaces/interfaces";
import Button from "../Button/Button";
import Menu from "../Menu/Menu";
import HeaderStyled from "./HeaderStyled";

interface HeaderProps {
  currentUser: IUser;
}

const initialMenuState = false;

const Header = ({ currentUser }: HeaderProps): JSX.Element => {
  const [menu, setMenu] = useState<boolean>(initialMenuState);

  const handleClick = () => {
    setMenu(!menu);
  };

  const handleMenuClick = () => {
    setMenu(false);
  };

  return (
    <HeaderStyled className="header">
      <h1 className="header__title">Pixel Junkyard</h1>
      {currentUser.userName === "" ? null : (
        <Button text={currentUser.userName} action={handleClick} />
      )}
      {menu && <Menu action={handleMenuClick} />}
    </HeaderStyled>
  );
};

export default Header;
