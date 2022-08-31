import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import GuestPageStyled from "./GuestPageStyled";

const GuestPage = (): JSX.Element => {
  return (
    <GuestPageStyled className="guest-page">
      <div className="guest-page__menu-container">
        <NavLink to="/login">
          <Button text="Log in" />
        </NavLink>
        <NavLink to="/register">
          <Button text="Register" />
        </NavLink>
      </div>
    </GuestPageStyled>
  );
};

export default GuestPage;
