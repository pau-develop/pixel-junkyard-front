import styled from "styled-components";

const FormStyled = styled.div`
  padding-bottom: 10%;
  .register {
    &__form {
      border-radius: 50px;
      background: linear-gradient(
        0deg,
        ${(props) => props.theme.thirdColor} 0%,
        ${(props) => props.theme.primaryColor} 100%
      );
      width: 320px;

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
        -webkit-box-shadow: inset 0 10px 10px #0000009e;
        -moz-box-shadow: inset 0 10px 10px #0000009e;
        box-shadow: inset 0 10px 10px #0000009e;
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

export default FormStyled;
