import styled from "styled-components";

const CanvasPageStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .page {
    &__title-container {
      border-top: 2px solid ${(props) => props.theme.thirdColor};
      border-bottom: 2px solid ${(props) => props.theme.thirdColor};
      background: ${(props) => props.theme.linearGradient};
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 7.5%;
      color: ${(props) => props.theme.secondaryColor};
      text-transform: uppercase;
      font-size: 1.5rem;
      padding: 0;
    }
    &__title-heading {
      margin: 0;
      font-size: 2rem;
    }
    &__inquiry {
      color: ${(props) => props.theme.secondaryColor};
    }
    &__buttons {
      height: 30%;
      justify-content: space-around;
      display: flex;
      flex-direction: column;
    }
  }
`;

export default CanvasPageStyled;
