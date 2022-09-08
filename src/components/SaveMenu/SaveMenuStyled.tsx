import styled from "styled-components";
const SaveMenuStyled = styled.div`
  background-color: ${(props) => props.theme.thirdColor};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  color: ${(props) => props.theme.secondaryColor};
  .save-menu {
    height: 100%;
    &__box {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: 100%;
      h2 {
        margin: 0;
        margin-top: 5%;
        height: 10%;
      }
      form {
        height: 90%;
      }
    }
    &__form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 60%;
      label {
        margin: 5%;
      }
      input {
        width: 100%;
        padding: 3%;
      }
      textarea {
        resize: none;
        height: 20%;
        width: 100%;
        padding: 3%;
      }
    }
    &__button-wrap {
      margin-top: 5%;
    }
  }
`;

export default SaveMenuStyled;
