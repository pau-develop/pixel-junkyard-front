import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  return (
    <RegisterFormStyled className="register">
      <h1 className="register__title">Register</h1>
      <form className="register__form">
        <label htmlFor="name">User name</label>
        <input required id="name" autoComplete="off" type="text"></input>
        <label htmlFor="password">Password</label>
        <input
          required
          data-testid="password"
          id="password"
          autoComplete="off"
          type="text"
        ></input>
        <label htmlFor="email">Email</label>
        <input
          required
          data-testid="email"
          id="email"
          autoComplete="off"
          type="text"
        ></input>
        <div className="register__button-wrap">
          <Button text="Cancel" />
          <Button text="Accept" />
        </div>
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
