import Button from "../Button/Button";
import LogoutMenuStyled from "./LogoutMenuStyled";

interface LogoutMenuProps {
  menuClass: string;
}

const LogoutMenu = ({ menuClass }: LogoutMenuProps): JSX.Element => {
  return (
    <LogoutMenuStyled className={menuClass}>
      <span>Do you want to log out?</span>
      <Button text="OK" />
    </LogoutMenuStyled>
  );
};

export default LogoutMenu;
