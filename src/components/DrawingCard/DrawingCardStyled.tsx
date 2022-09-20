import styled from "styled-components";

const DrawingCardStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;

  .draw-card {
    &__title {
      background: ${(props) => props.theme.linearGradient};
      padding: 2% 0;
      width: 90%;
      text-align: center;
      font-size: 1.2rem;
    }
    &__image {
      cursor: pointer;

      width: 100%;
      height: 100%;
    }
    &__footer {
      background: ${(props) => props.theme.linearGradient};
      width: 100%;
      padding: 2% 0;
      text-align: center;
      display: flex;
      justify-content: center;
    }
    &__icon {
      font-size: 1rem;
      @media (min-width: 600px) {
        font-size: 2rem;
      }
      border: 1px solid ${(props) => props.theme.secondaryColor};
      cursor: pointer;
      width: 20%;
      height: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      top: 12%;
      right: 4%;
      position: absolute;
      background-color: ${(props) => props.theme.primaryColor};
    }
  }
`;

export default DrawingCardStyled;
