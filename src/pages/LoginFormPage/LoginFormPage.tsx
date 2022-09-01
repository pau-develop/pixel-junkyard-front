import Form from "../../components/Form/Form";
import PageStyled from "../PageStyled";

const LoginFormPage = (): JSX.Element => {
  return (
    <PageStyled className="page">
      <h1 className="page__title">Log in</h1>
      <Form formType={"login"} />
    </PageStyled>
  );
};

export default LoginFormPage;
