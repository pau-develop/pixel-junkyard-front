import useUser from "../../hooks/useUser";
import Button from "../Button/Button";
import LogoutMenuStyled from "./LogoutMenuStyled";

interface LogoutMenuProps {
  menuClass: string;
  action: () => void;
}

const LogoutMenu = ({ menuClass, action }: LogoutMenuProps): JSX.Element => {
  const { logoutUser } = useUser();

  const handleLogout = () => {
    logoutUser();
    action();
  };

  return (
    <LogoutMenuStyled className={menuClass}>
      <span>Do you want to log out?</span>
      <Button text="OK" action={handleLogout} />
    </LogoutMenuStyled>
  );
};

export default LogoutMenu;
