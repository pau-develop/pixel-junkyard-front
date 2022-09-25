import styled from "styled-components";

const UnknownPageStyled = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .unknown-path {
    &__box {
      background-color: ${(props) => props.theme.primaryColor};
      border: 2px solid ${(props) => props.theme.secondaryColor};
      padding: 5%;
      width: 300px;
      border: 2px solid ${(props) => props.theme.secondaryColor};
      border-radius: 25px;
      color: ${(props) => props.theme.secondaryColor};
      font-size: 1rem;
      text-align: center;
      p {
        text-align: center;
      }
    }
  }
`;

export default UnknownPageStyled;
