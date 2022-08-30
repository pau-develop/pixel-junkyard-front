import { FormEvent, useState } from "react";
import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

interface Input {
  userName: string;
  password: string;
  email: string;
}

const inputField = {
  userName: "",
  password: "",
  email: "",
};

const RegisterForm = (): JSX.Element => {
  const [input, setInput] = useState<Input>(inputField);

  const handleInputObject = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser = {
      userName: input.userName,
      password: input.password,
      email: input.email,
    };
    console.log(newUser);
  };

  return (
    <RegisterFormStyled className="register">
      <h1 className="register__title">Register</h1>
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
          data-testid="password"
          id="password"
          autoComplete="off"
          type="text"
          value={input.password}
          onChange={(event) =>
            setInput({ ...input, password: event.target.value })
          }
        ></input>
        <label htmlFor="email">Email</label>
        <input
          required
          data-testid="email"
          id="email"
          autoComplete="off"
          type="text"
          value={input.email}
          onChange={(event) =>
            setInput({ ...input, email: event.target.value })
          }
        ></input>
        <div className="register__button-wrap">
          <Button text="Cancel" type="button" />
          <Button text="Accept" />
        </div>
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
