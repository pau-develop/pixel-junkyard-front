import RegisterForm from "../../components/RegisterForm/RegisterForm";
import PageStyled from "../PageStyled";

const RegisterFormPage = (): JSX.Element => {
  return (
    <PageStyled className="page">
      <h1 className="page__title">Register</h1>
      <RegisterForm />
    </PageStyled>
  );
};

export default RegisterFormPage;
