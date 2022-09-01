import { useState } from "react";
import Input from "../../interfaces/interfaces";
import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

const inputField = {
  userName: "",
  password: "",
  email: "",
};

const LoginForm = (): JSX.Element => {
  const [input, setInput] = useState<Input>(inputField);

  return (
    <LoginFormStyled className="login">
      <form className="login__form" onSubmit={(event) => null}>
        <label htmlFor="name">User name</label>
        <input
          required
          id="name"
          autoComplete="off"
          type="text"
          value={input.userName}
          onChange={(event) =>
            setInput({ ...input, userName: event.target.value })
          }
        ></input>
        <label htmlFor="password">Password</label>
        <input
          required
          id="password"
          autoComplete="off"
          type="text"
          value={input.password}
          onChange={(event) =>
            setInput({ ...input, password: event.target.value })
          }
        ></input>
        <div className="login__button-wrap">
          <Button text="Cancel" type="button" />
          <Button text="Accept" />
        </div>
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;
