import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { IUser } from "../../interfaces/interfaces";
import Menu from "../Menu/Menu";
import HeaderStyled from "./HeaderStyled";
import LogoutMenu from "../LogoutMenu/LogoutMenu";

interface HeaderProps {
  currentUser: IUser;
}

const initialMenuState = false;

const Header = ({ currentUser }: HeaderProps): JSX.Element => {
  const hamburguerIcon = <FontAwesomeIcon icon={faBars} />;
  const logoutIcon = <FontAwesomeIcon icon={faPowerOff} />;
  const [navMenu, setNavMenu] = useState<boolean>(initialMenuState);
  const [logoutMenu, setLogoutMenu] = useState<boolean>(initialMenuState);

  const handleOpenNavMenuClick = () => {
    setNavMenu(!navMenu);
    setLogoutMenu(false);
  };

  const handleCloseNavMenuClick = () => {
    if (window.innerWidth < 600) setNavMenu(false);
    setLogoutMenu(false);
  };

  const handleOpenLogoutMenuClick = () => {
    setLogoutMenu(!logoutMenu);
    setNavMenu(false);
  };
  console.log(logoutMenu);

  return (
    <HeaderStyled className="header">
      <h1 className="header__title">Pixel Junkyard</h1>
      {currentUser.userName === "" ? null : (
        <>
          <Menu
            action={handleCloseNavMenuClick}
            logAction={handleOpenLogoutMenuClick}
            menuClass="desk-menu"
          />
          <div className="header__icon-wrap">
            <i data-testid="hamburger-icon" onClick={handleOpenNavMenuClick}>
              {hamburguerIcon}
            </i>
            <i data-testid="off-icon" onClick={handleOpenLogoutMenuClick}>
              {logoutIcon}
            </i>
          </div>
        </>
      )}
      {navMenu && (
        <Menu action={handleCloseNavMenuClick} menuClass="phone-menu" />
      )}
      {logoutMenu && <LogoutMenu menuClass="phone-logout-menu" />}
    </HeaderStyled>
  );
};

export default Header;
