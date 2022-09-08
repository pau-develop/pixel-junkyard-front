import styled from "styled-components";

const ReactCanvasStyled = styled.section`
  background-color: ${(props) => props.theme.primaryColor};
  height: 92.5%;
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .react-canvas {
    &__container {
      border: 2px solid ${(props) => props.theme.secondaryColor};
      width: 90%;
      height: 80%;
    }
    &__canvas {
      width: 100%;
      height: 100%;
      image-rendering: pixelated;
    }
  }
`;

export default ReactCanvasStyled;
