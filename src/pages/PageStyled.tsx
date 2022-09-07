import styled from "styled-components";

const PageStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .page {
    &__title-container {
      border-top: 2px solid ${(props) => props.theme.thirdColor};
      background: linear-gradient(90deg, #17232e 0%, #144573 50%, #17232e 100%);
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
  }
`;

export default PageStyled;
