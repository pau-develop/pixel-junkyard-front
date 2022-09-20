import Form from "../../components/Form/Form";
import PageStyled from "../PageStyled";

const RegisterFormPage = (): JSX.Element => {
  return (
    <PageStyled
      className="page"
      initial={{ scaleX: 0, scaleY: 0 }}
      animate={{ scaleX: 1, scaleY: 1 }}
      transition={{ bounce: 0 }}
      exit={{ scaleX: 0, scaleY: 0 }}
    >
      <div className="page__title-container">
        <h1 className="page__title-heading">Register</h1>
      </div>
      <Form formType={"register"} />
    </PageStyled>
  );
};

export default RegisterFormPage;
