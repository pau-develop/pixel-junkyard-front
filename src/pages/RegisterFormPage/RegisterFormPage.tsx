import Form from "../../components/Form/Form";
import PageStyled from "../PageStyled";

const RegisterFormPage = (): JSX.Element => {
  return (
    <PageStyled className="page">
      <div className="page__title-container">
        <h1 className="page__title-heading">Register</h1>
      </div>
      <Form formType={"register"} />
    </PageStyled>
  );
};

export default RegisterFormPage;
