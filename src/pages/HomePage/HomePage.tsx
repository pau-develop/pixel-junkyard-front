import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import HomePageStyled from "./HomePageStyled";

interface HomePageProps {
  userLogged: boolean;
}

const HomePage = ({ userLogged }: HomePageProps): JSX.Element => {
  return (
    <HomePageStyled
      className="guest-page"
      initial={{ scaleX: 0, scaleY: 0 }}
      animate={{ scaleX: 1, scaleY: 1 }}
      transition={{ bounce: 0 }}
      exit={{ scaleX: 0, scaleY: 0 }}
    >
      {!userLogged ? (
        <div className="guest-page__menu-container">
          <NavLink to="/login">
            <Button text="Log in" />
          </NavLink>
          <NavLink to="/register">
            <Button text="Register" />
          </NavLink>
        </div>
      ) : (
        <div className="guest-page__menu-container">
          <h1>Welcome</h1>
        </div>
      )}
    </HomePageStyled>
  );
};

export default HomePage;
