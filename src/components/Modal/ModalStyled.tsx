import styled from "styled-components";

const ModalStyled = styled.div`
  background: ${(props) => props.theme.fadeColor};
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    &__box {
      padding: 5%;
      width: 300px;
      background-color: ${(props) => props.theme.thirdColor};
      border: 2px solid ${(props) => props.theme.secondaryColor};
      border-radius: 25px;
      color: ${(props) => props.theme.secondaryColor};
      font-size: 1.5rem;
      text-align: center;
      p {
        text-align: center;
      }
    }
  }
`;
export default ModalStyled;
