import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { IUser } from "../../interfaces/interfaces";
import Menu from "../Menu/Menu";
import HeaderStyled from "./HeaderStyled";

interface HeaderProps {
  currentUser: IUser;
}

const initialMenuState = false;

const Header = ({ currentUser }: HeaderProps): JSX.Element => {
  const hamburguer = <FontAwesomeIcon icon={faBars} />;
  const [menu, setMenu] = useState<boolean>(initialMenuState);

  const handleClick = () => {
    setMenu(!menu);
  };

  const handleMenuClick = () => {
    if (window.innerWidth < 600) setMenu(false);
  };

  return (
    <HeaderStyled className="header">
      <h1 className="header__title">Pixel Junkyard</h1>
      {currentUser.userName === "" ? null : (
        <>
          <i data-testid="icon-element" onClick={handleClick}>
            {hamburguer}
          </i>
          <Menu action={handleMenuClick} menuClass="desk-menu" />
        </>
      )}
      {menu && <Menu action={handleMenuClick} menuClass="phone-menu" />}
    </HeaderStyled>
  );
};

export default Header;
