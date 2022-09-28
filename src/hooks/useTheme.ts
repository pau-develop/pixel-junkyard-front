import { useDispatch } from "react-redux";
import { ITheme } from "../interfaces/interfaces";
import { changeThemeActionNew } from "../store/actionCreators/actionCreators";

const useTheme = () => {
  const dispatch = useDispatch();

  const changeTheme = (theme: ITheme) => {
    dispatch(changeThemeActionNew(theme));
  };

  return { changeTheme };
};

export default useTheme;
