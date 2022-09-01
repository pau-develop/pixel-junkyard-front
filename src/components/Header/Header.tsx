import { IUser } from "../../interfaces/interfaces";
import Button from "../Button/Button";
import HeaderStyled from "./HeaderStyled";

interface HeaderProps {
  currentUser: IUser;
}

const Header = ({ currentUser }: HeaderProps): JSX.Element => {
  return (
    <HeaderStyled className="header">
      <h1 className="header__title">Pixel Junkyard</h1>
      {currentUser.userName === "" ? null : (
        <Button text={currentUser.userName} />
      )}
    </HeaderStyled>
  );
};

export default Header;
