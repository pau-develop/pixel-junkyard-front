import styled from "styled-components";

const DrawingCardStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
  .draw-card {
    &__title {
      background: ${(props) => props.theme.linearGradient};
      margin-top: auto;
      margin-bottom: auto;
      width: 100%;
      height: 7.5%;
      text-align: center;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        font-size: 0.75rem;
      }
    }
    &__image {
      cursor: pointer;
      height: 85%;
      width: 100%;
    }
    &__footer {
      background: ${(props) => props.theme.linearGradient};
      width: 100%;
      height: 7.5%;

      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 0.75rem;
      }
    }
    &__icon {
      font-size: 0.9rem;
      @media (min-width: ${(props) => props.theme.smallBreakPoint}) {
        font-size: 1.5rem;
      }
      @media (min-width: ${(props) => props.theme.bigBreakPoint}) {
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
      top: 9%;
      right: 4%;
      position: absolute;
      background-color: ${(props) => props.theme.primaryColor};
    }
  }
`;

export default DrawingCardStyled;
