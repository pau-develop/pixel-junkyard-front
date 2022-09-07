import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled className="guest-page">
      <div className="guest-page__menu-container">
        <NavLink to="/login">
          <Button text="Log in" />
        </NavLink>
        <NavLink to="/register">
          <Button text="Register" />
        </NavLink>
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
