import useTheme from "../../hooks/useTheme";
import { ITheme } from "../../interfaces/interfaces";
import ThemeMenuStyled from "./ThemeMenuStyled";
import themeMenuColors from "./ThemeMenuColors";

interface ThemeMenuProps {
  menuClass: string;
  action: () => void;
}

const ThemeMenu = ({ menuClass, action }: ThemeMenuProps): JSX.Element => {
  const { changeTheme } = useTheme();

  const handleChangeTheme = (theme: ITheme) => {
    changeTheme(theme);
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
        <li onClick={() => handleChangeTheme(themeMenuColors[0])}></li>
        <li onClick={() => handleChangeTheme(themeMenuColors[1])}></li>
        <li onClick={() => handleChangeTheme(themeMenuColors[2])}></li>
        <li onClick={() => handleChangeTheme(themeMenuColors[3])}></li>
        <li onClick={() => handleChangeTheme(themeMenuColors[4])}></li>
      </ul>
    </ThemeMenuStyled>
  );
};

export default ThemeMenu;
