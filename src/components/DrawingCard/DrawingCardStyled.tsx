import styled from "styled-components";

const DrawingCardStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 10px;
  .draw-card {
    &__title {
      padding: 2% 0;
      width: 90%;
      text-align: center;
      font-size: 1.2rem;
    }
    &__image {
      cursor: pointer;
      width: 90%;
      height: 100%;
    }
    &__footer {
      width: 90%;
      padding: 2% 0;
      text-align: center;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default DrawingCardStyled;
