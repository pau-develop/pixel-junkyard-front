import styled from "styled-components";

const RegisterFormStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .register {
    &__title {
      color: ${(props) => props.theme.secondaryColor};
      text-transform: uppercase;
      font-size: 1.5rem;
    }
    &__form {
      border-radius: 50px;
      background: linear-gradient(
        0deg,
        ${(props) => props.theme.thirdColor} 0%,
        ${(props) => props.theme.primaryColor} 100%
      );
      width: 400px;
      height: 600px;
      display: flex;
      flex-direction: column;
      align-items: center;
      label {
        color: ${(props) => props.theme.secondaryColor};
        font-size: 1.5rem;
        padding: 4%;
      }
      input {
        padding: 4%;
        width: 70%;
        border: none;
        border-radius: 15px;
        color: ${(props) => props.theme.primaryColor};
        font-size: 1.5rem;
      }
      input:focus {
        outline: none;
      }
    }
    &__button-wrap {
      display: flex;
      justify-content: space-between;
      padding-top: 10%;
      width: 70%;
    }
  }
`;

export default RegisterFormStyled;
