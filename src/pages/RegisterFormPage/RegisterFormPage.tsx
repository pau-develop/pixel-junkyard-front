import Form from "../../components/Form/Form";
import PageStyled from "../PageStyled";

const RegisterFormPage = (): JSX.Element => {
  return (
    <PageStyled className="page">
      <h1 className="page__title">Register</h1>
      <Form formType={"register"} />
    </PageStyled>
  );
};

export default RegisterFormPage;
