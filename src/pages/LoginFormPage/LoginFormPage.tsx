import Form from "../../components/Form/Form";
import PageStyled from "../PageStyled";

const LoginFormPage = (): JSX.Element => {
  return (
    <PageStyled className="page">
      <div className="page__title-container">
        <h1 className="page__title-heading">Log in</h1>
      </div>
      <Form formType={"login"} />
    </PageStyled>
  );
};

export default LoginFormPage;
