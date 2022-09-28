import ThemeMenuStyled from "./ThemeMenuStyled";

interface ThemeMenuProps {
  menuClass: string;
  action: () => void;
}

const ThemeMenu = ({ menuClass, action }: ThemeMenuProps): JSX.Element => {
  const changeTheme = () => {};

  const handleChangeTheme = () => {
    changeTheme();
    action();
  };

  return (
    <ThemeMenuStyled
      className={menuClass}
      initial={{ x: "+100%" }}
      animate={{ x: 0 }}
      transition={{ bounce: 0 }}
      exit={{ x: "+100%" }}
    >
      <span>Pick color theme</span>
      <ul>
        <li onClick={handleChangeTheme}></li>
        <li onClick={handleChangeTheme}></li>
        <li onClick={handleChangeTheme}></li>
      </ul>
    </ThemeMenuStyled>
  );
};

export default ThemeMenu;
