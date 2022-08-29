import Button from "../components/Button/Button";
import GuestPageStyled from "./GuestPageStyled";

const GuestPage = (): JSX.Element => {
  return (
    <GuestPageStyled className="guest-page">
      <div className="guest-page__menu-container">
        <Button text="Log in" />
        <Button text="Register" />
      </div>
    </GuestPageStyled>
  );
};

export default GuestPage;
