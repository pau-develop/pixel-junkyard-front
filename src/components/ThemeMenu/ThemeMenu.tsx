import useTheme from "../../hooks/useTheme";
import { ITheme } from "../../interfaces/interfaces";
import ThemeMenuStyled from "./ThemeMenuStyled";

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
        <li
          onClick={() =>
            handleChangeTheme({
              primaryColor: "#144573",
              secondaryColor: "#A1CEF6",
              thirdColor: "#000",
              linearGradient: `linear-gradient(90deg, #000 0%, #144573 50%, #000 100%)`,
              smallBreakPoint: "1400px",
              bigBreakPoint: "2000px",
            })
          }
        ></li>
        <li
          onClick={() =>
            handleChangeTheme({
              primaryColor: "#993d00",
              secondaryColor: "#fff0e6",
              thirdColor: "#000",
              linearGradient: `linear-gradient(90deg, #000 0%, #993d00 50%, #000 100%)`,
              smallBreakPoint: "1400px",
              bigBreakPoint: "2000px",
            })
          }
        ></li>
        <li
          onClick={() =>
            handleChangeTheme({
              primaryColor: "#999900",
              secondaryColor: "#ffffe6",
              thirdColor: "#000",
              linearGradient: `linear-gradient(90deg, #000 0%, #999900 50%, #000 100%)`,
              smallBreakPoint: "1400px",
              bigBreakPoint: "2000px",
            })
          }
        ></li>
      </ul>
    </ThemeMenuStyled>
  );
};

export default ThemeMenu;
