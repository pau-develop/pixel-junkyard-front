import LoginForm from "../../components/LoginForm/LoginForm";
import PageStyled from "../PageStyled";

const LoginFormPage = (): JSX.Element => {
  return (
    <PageStyled className="page">
      <h1 className="page__title">Log in</h1>
      <LoginForm />
    </PageStyled>
  );
};

export default LoginFormPage;
