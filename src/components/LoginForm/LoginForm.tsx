import { FormEvent, useState } from "react";
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

  const handleInputObject = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser = {
      userName: input.userName,
      password: input.password,
    };
    console.log(newUser);
  };
  return (
    <LoginFormStyled className="register">
      <form
        className="register__form"
        onSubmit={(event) => handleInputObject(event)}
      >
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
        <div className="register__button-wrap">
          <Button text="Cancel" type="button" />
          <Button text="Accept" />
        </div>
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;
