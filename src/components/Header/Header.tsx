import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPowerOff,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { IUser } from "../../interfaces/interfaces";
import Menu from "../Menu/Menu";
import HeaderStyled from "./HeaderStyled";
import LogoutMenu from "../LogoutMenu/LogoutMenu";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ThemeMenu from "../ThemeMenu/ThemeMenu";

interface HeaderProps {
  currentUser: IUser;
}

const initialMenuState = false;

const Header = ({ currentUser }: HeaderProps): JSX.Element => {
  const navigate = useNavigate();
  const hamburguerIcon = <FontAwesomeIcon icon={faBars} />;
  const logoutIcon = <FontAwesomeIcon icon={faPowerOff} />;
  const paletteIcon = <FontAwesomeIcon icon={faPalette} />;
  const [navMenu, setNavMenu] = useState<boolean>(initialMenuState);
  const [logoutMenu, setLogoutMenu] = useState<boolean>(initialMenuState);
  const [themeMenu, setThemeMenu] = useState<boolean>(initialMenuState);

  const handleOpenNavMenuClick = () => {
    setNavMenu(!navMenu);
    setLogoutMenu(false);
  };

  const handleCloseNavMenuClick = () => {
    if (window.innerWidth < 600) setNavMenu(false);
    setLogoutMenu(false);
    setThemeMenu(false);
  };

  const handleOpenLogoutMenuClick = () => {
    setLogoutMenu(!logoutMenu);
    setNavMenu(false);
    setThemeMenu(false);
  };

  const handleOpenThemeMenuClick = () => {
    setThemeMenu(!themeMenu);
    setNavMenu(false);
    setLogoutMenu(false);
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
            themeAction={handleOpenThemeMenuClick}
            menuClass="desk-menu"
          />
          <div className="header__icon-wrap">
            <i data-testid="hamburger-icon" onClick={handleOpenNavMenuClick}>
              {hamburguerIcon}
            </i>
            <i data-testid="off-icon" onClick={handleOpenLogoutMenuClick}>
              {logoutIcon}
            </i>
            <i data-testid="palette-icon" onClick={handleOpenThemeMenuClick}>
              {paletteIcon}
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
        {themeMenu && (
          <ThemeMenu
            action={handleCloseNavMenuClick}
            menuClass="phone-theme-menu"
          />
        )}
      </AnimatePresence>
    </HeaderStyled>
  );
};

export default Header;
