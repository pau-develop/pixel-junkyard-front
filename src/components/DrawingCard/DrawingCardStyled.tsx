import styled from "styled-components";

const DrawingCardStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;

  .draw-card {
    &__title {
      background: linear-gradient(90deg, #17232e 0%, #144573 50%, #17232e 100%);
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
      background: linear-gradient(90deg, #17232e 0%, #144573 50%, #17232e 100%);
      width: 100%;
      padding: 2% 0;
      text-align: center;
      display: flex;
      justify-content: center;
    }
    &__icon {
      cursor: pointer;
      width: 20%;
      height: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      top: 8%;
      right: 5%;
      position: absolute;
      background-color: ${(props) => props.theme.primaryColor};
    }
  }
`;

export default DrawingCardStyled;
