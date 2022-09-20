import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { IUser } from "../../interfaces/interfaces";
import Menu from "../Menu/Menu";
import HeaderStyled from "./HeaderStyled";
import LogoutMenu from "../LogoutMenu/LogoutMenu";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

interface HeaderProps {
  currentUser: IUser;
}

const initialMenuState = false;

const Header = ({ currentUser }: HeaderProps): JSX.Element => {
  const navigate = useNavigate();
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

  return (
    <HeaderStyled className="header">
      <h1 className="header__title" onClick={() => navigate("/home")}>
        Pixel Junkyard
      </h1>
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
      <AnimatePresence>
        {navMenu && (
          <Menu action={handleCloseNavMenuClick} menuClass="phone-menu" />
        )}

        {logoutMenu && (
          <LogoutMenu
            menuClass="phone-logout-menu"
            action={handleOpenLogoutMenuClick}
          />
        )}
      </AnimatePresence>
    </HeaderStyled>
  );
};

export default Header;
