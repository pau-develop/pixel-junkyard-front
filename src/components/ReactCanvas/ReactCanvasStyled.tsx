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
      position: relative;
      border: 2px solid ${(props) => props.theme.thirdColor};
      width: 90%;
      height: 80%;
    }
    &__container--squared {
      width: 90%;
      height: 60%;
    }

    &__canvas {
      cursor: crosshair;
      touch-action: none;
      width: 100%;
      height: 100%;
      image-rendering: pixelated;
    }
    &__scaled {
      touch-action: none;
      display: hidden;
    }
  }
`;

export default ReactCanvasStyled;
