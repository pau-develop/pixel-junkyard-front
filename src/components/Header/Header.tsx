import { IUser } from "../../interfaces/interfaces";
import HeaderStyled from "./HeaderStyled";

interface HeaderProps {
  currentUser: IUser;
}

const Header = ({ currentUser }: HeaderProps): JSX.Element => {
  return (
    <HeaderStyled className="header">
      <h1 className="header__title">Pixel Junkyard</h1>
    </HeaderStyled>
  );
};

export default Header;
