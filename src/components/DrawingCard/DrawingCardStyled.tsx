import styled from "styled-components";

const DrawingCardStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0;
  padding: 0;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 10px;
  .draw-card {
    &__title {
      width: 100%;
      text-align: center;
    }
    &__image {
      cursor: pointer;
      width: 90%;
      height: 100%;
    }
    &__footer {
      width: 90%;
      text-align: center;
    }
  }
`;

export default DrawingCardStyled;
